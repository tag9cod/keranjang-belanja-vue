<template>
    <div class="row d-flex flex-nowrap align-items-centre">
        <span
            class="col-3"
            id="prod-name"
            @click="productModalClick"
            data-bs-toggle="modal"
            :data-bs-target="'#' + modalId"
            style="cursor: pointer"
            >{{ product.name }}</span
        >
        <span class="col-4" id="prod-desc">{{ product.desc }}</span>
        <span class="col-1" id="prod-stock">{{ product.stock }}</span>
        <span class="col-1" id="prod-price" style="font-weight: 600"
            >{{ Math.round((product.price / 1000) * 10) / 10 }}k</span
        >
        <button-component
            :class="['col-auto', 'mx-auto']"
            v-bind:disabled="product.stock <= 0"
            @click="handleClick"
            :btnType="btnType"
        ></button-component>
        <centered-modal
            :bodyData="{
                src: product.src,
                desc: product.longDesc,
            }"
            :componentBody="componentBody"
            :componentFooter="componentFooter"
            :modalTitle="product.name"
            :btnTypes="btnTypeModalFooter"
            :modalId="modalId"
        ></centered-modal>
    </div>
</template>

<script>
import ProductModalContent from "./ProductModalContent.vue";
import ProductModalFooterVue from "./ProductModalFooter.vue";

export default {
    props: {
        product: {
            type: Object,
            default: () => [],
        },
        index: {
            type: Number,
            default: () => -1,
        },
    },
    data: function () {
        return {
            bodyData: {},
            btnType: {
                text:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>' +
                    "&ensp;Add",
                type: "primary",
            },
            btnTypeModalFooter: {
                Close: {
                    text: "Close",
                    type: "secondary",
                },
            },
            componentBody: ProductModalContent,
            componentFooter: ProductModalFooterVue,
            modalId: this.product.name.replace(/\s/g, "") + "Modal",
        };
    },
    methods: {
        handleClick() {
            this.$emit("add", this.index);
        },
        productModalClick() {
            console.log(
                "product has been clicked, modal should been displayed"
            );
        },
    },
};
</script>

<style>
#prod-name {
    text-decoration: underline;
}
</style>
