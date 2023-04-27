<template>
    <div
        id="list-product"
        class="container-fluid mt-4 d-flex flex-column justify-content-start"
    >
        <div class="row custom-row-title">
            <h2 class="col">{{ title }}</h2>
        </div>
        <div class="row d-flex flex-nowrap custom-table-title">
            <span class="col-3">Name</span>
            <span class="col-4">Description</span>
            <span class="col-1" style="padding-left: 0">Stock</span>
            <span class="col-1">Price</span>
        </div>
        <div class="scrollable" id="list-product-content">
            <product-row-component
                v-for="(product, index) in products"
                :key="index"
                :product="product"
                :index="index"
                @add="emitAdd"
            ></product-row-component>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            default: () => [],
        },
    },
    data: function () {
        return {
            title: "Semua Produk",
        };
    },
    methods: {
        emitAdd(data) {
            this.$emit("add", data);
        },
    },
};
</script>

<style>
#list-product-content {
    max-height: 250px;
    min-height: 250px;
    padding: 0.75rem 0 !important;
}
</style>
