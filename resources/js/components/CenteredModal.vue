<template>
    <div
        class="modal fade"
        :id="modalId"
        tabindex="-1"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header justify-content-center">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        {{ modalTitle }}
                    </h1>
                </div>
                <div class="modal-body">
                    <component
                        :is="componentBody"
                        :bodyData="bodyData"
                    ></component>
                </div>
                <div class="modal-footer">
                    <component
                        :is="componentFooter"
                        :footerData="footerData"
                        :btnTypes="btnTypes"
                        @actionClick="actionClick"
                    ></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalId: {
            type: String,
        },
        bodyData: {
            type: Object,
            default: () => {},
        },
        footerData: {
            type: Object,
            required: false,
        },
        modalTitle: {
            type: String,
            default: "",
        },
        componentBody: {
            type: Object,
            required: true,
        },
        componentFooter: {
            type: Object,
            required: true,
        },
        btnTypes: {
            type: Object,
            required: true,
        },
    },
    methods: {
        actionClick(data) {
            this.$emit("actionClick", data);
        },
    },
};
</script>

<style></style>
