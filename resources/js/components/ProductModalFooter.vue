<template>
    <div>
        <button-component :btnType="btnTypes.Close" :data-bs-dismiss="'modal'">
        </button-component>
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
};
</script>

<style></style>
