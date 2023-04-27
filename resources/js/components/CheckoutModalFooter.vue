<template>
    <div>
        <button-component :btnType="btnTypes.Cancel" :data-bs-dismiss="'modal'">
        </button-component>
        <button-component
            :btnType="btnTypes.Print"
            :data-bs-dismiss="'modal'"
            @click="handlePrintClick"
        ></button-component>
    </div>
</template>

<script>
export default {
    props: {
        btnTypes: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handlePrintClick() {
            const id = this.generateRandomString(10);
            console.log(`id: ${id}`);
            this.$emit("actionClick", id);
        },
        generateRandomString(n) {
            let text = "";
            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < n; i++) {
                text += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
            }

            return text;
        },
    },
};
</script>

<style></style>
