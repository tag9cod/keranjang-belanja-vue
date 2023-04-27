<template>
    <div class="container-fluid mt-5 d-flex flex-column justify-content-start">
        <div class="row custom-row-title">
            <h2>Keranjang Belanja</h2>
        </div>
        <div class="row custom-table-title">
            <span class="col-3">Name</span>
            <span class="col-3">Quantity</span>
            <span class="col-2">Price</span>
        </div>
        <div v-for="(item, index) in cartItems" :key="index">
            <cart-row-component
                :item="item"
                :index="index"
                @delete="deleteHandle"
                @deleteOne="deleteOneHandle"
            >
            </cart-row-component>
        </div>
        <div class="row custom-total-row">
            <span class="col-3">Total:</span>
            <span class="col-3"></span>
            <span class="col-3">Rp. {{ total }}</span>
            <span class="col-3"></span>
        </div>
        <div class="row row-no-border mt-3">
            <button-component
                :class="'col-auto'"
                :btnType="btnTypeCheckout"
                @click="checkoutHandleClick"
                data-bs-toggle="modal"
                :data-bs-target="'#' + checkoutModalId"
                :disabled="Object.keys(this.cartItems).length <= 0"
            ></button-component>
            <button-component
                :class="['col-auto', 'border-none']"
                class="ml-3"
                :btnType="btnTypeClearAll"
                :disabled="Object.keys(this.cartItems).length <= 0"
                @click="clearAllHandleClick"
            ></button-component>
        </div>
        <centered-modal
            :modalId="checkoutModalId"
            :bodyData="{
                cartItems,
                total,
            }"
            :componentBody="checkoutComponentBody"
            :componentFooter="checkoutComponentFooter"
            :modalTitle="'Checkout'"
            :btnTypes="checkoutBtnTypesModal"
            @actionClick="checkoutActionClickHandle"
        ></centered-modal>
        <centered-modal
            :modalId="resetModalId"
            :bodyData="{
                id: orderId,
            }"
            :componentBody="resetComponentBody"
            :componentFooter="resetComponentFooter"
            :modalTitle="'Checkout Done'"
            :btnTypes="resetBtnTypesModal"
        ></centered-modal>
    </div>
</template>

<script>
import CheckoutModalContent from "./CheckoutModalContent.vue";
import CheckoutModalFooterVue from "./CheckoutModalFooter.vue";
import ResetModalContent from "./ResetModalContent.vue";
import ResetModalFooter from "./ResetModalFooter.vue";

export default {
    props: {
        cartItems: {
            type: Object,
            default: () => {},
        },
        total: {
            type: Number,
            default: () => 0,
        },
    },
    data: function () {
        return {
            btnTypeCheckout: {
                text:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>' +
                    "&emsp;Checkout",
                type: "success",
            },
            btnTypeClearAll: {
                text: "Clear All",
                type: "outline-danger",
            },
            checkoutComponentBody: CheckoutModalContent,
            checkoutComponentFooter: CheckoutModalFooterVue,
            resetComponentBody: ResetModalContent,
            resetComponentFooter: ResetModalFooter,
            checkoutModalId: "checkoutModal",
            resetModalId: "resetModal",
            checkoutBtnTypesModal: {
                Cancel: {
                    text: "Cancel",
                    type: "secondary",
                },
                Print: {
                    text: "Print",
                    type: "primary",
                },
            },
            resetBtnTypesModal: {
                OK: {
                    text: "Okay",
                    type: "primary",
                },
            },
            orderId: "",
        };
    },
    methods: {
        deleteHandle(index) {
            console.log("emit delete to cart");
            this.$emit("delete", index);
        },
        deleteOneHandle(index) {
            console.log("emit delete one to cart");
            this.$emit("deleteOne", index);
        },
        checkoutHandleClick() {
            // alert(`You have to pay Rp. ${this.total}`)
            console.log("checkout pressed, modal should been displayed");
        },
        clearAllHandleClick() {
            console.log("emit clear all to cart");
            this.$emit("clearAll");
        },
        checkoutActionClickHandle(id) {
            this.orderId = id;
            // toggle reset modal
            $("#" + this.resetModalId).modal("toggle");
            console.log(`generating qrcode with id ${id}`);

            var qr = qrcode(4, "H");
            qr.addData(id);
            qr.make();
            var svg = qr.createSvgTag(4, 4);

            document.getElementById("qrcode-container").innerHTML = svg;

            document.getElementById(
                "qrcode-container"
            ).children[0].style.transform = "scale(1.25)";
            // clear all cart
            this.clearAllHandleClick();
        },
    },
};
</script>

<style></style>
