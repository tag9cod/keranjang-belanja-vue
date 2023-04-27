<template>
    <div class="container-sm">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                    Pesanan
                </li>
            </ol>
        </nav>
        <list-product-component
            :products="products"
            @add="addCartItem"
        ></list-product-component>
        <list-cart-component
            :cartItems="cartItems"
            :total="cartTotal"
            @delete="deleteCartItem"
            @deleteOne="deleteOneCartItem"
            @clearAll="clearAll"
        ></list-cart-component>
    </div>
</template>

<script>
const products = require("./_data/Products.js");

console.log(products);

export default {
    data: function () {
        return {
            products: Vue.observable(products.list),
            cartItems: Vue.observable({}),
            cartTotal: 0,
        };
    },
    methods: {
        addCartItem(index) {
            let product = this.products[index];
            if (!this.cartItems[index])
                Vue.set(this.cartItems, index, {
                    name: product.name,
                    qty: 1,
                    price: product.price,
                });
            else {
                Vue.set(this.cartItems, index, {
                    ...this.cartItems[index],
                    qty: this.cartItems[index].qty + 1,
                });
                this.updateCartItemPrices(index);
            }

            // reduce stock
            Vue.set(this.products, index, {
                ...this.products[index],
                stock: this.products[index].stock - 1,
            });
        },
        deleteCartItem(index) {
            console.log("catch delete event");
            this.resetStockProduct(index);
            Vue.delete(this.cartItems, index);
        },
        deleteOneCartItem(index) {
            console.log("catch delete one event");

            // restock
            Vue.set(this.products, index, {
                ...this.products[index],
                stock: this.products[index].stock + 1,
            });

            if (this.cartItems[index].qty == 1) {
                Vue.delete(this.cartItems, index);
                return;
            }

            Vue.set(this.cartItems, index, {
                ...this.cartItems[index],
                qty: this.cartItems[index].qty - 1,
            });

            this.updateCartItemPrices(index);

            console.log(this.cartItems);
        },
        clearAll() {
            Object.keys(this.cartItems).forEach((index) => {
                this.deleteCartItem(index);
            });
        },
        calculateTotal() {
            this.cartTotal = 0;

            if (Object.keys(this.cartItems).length == 0) return 0;

            console.log(JSON.stringify(this.cartItems));
            for (let index in this.cartItems) {
                this.cartTotal += this.cartItems[index].price;
            }
        },
        updateCartItemPrices(index) {
            Vue.set(this.cartItems, index, {
                ...this.cartItems[index],
                price: this.products[index].price * this.cartItems[index].qty,
            });
        },
        resetStockProduct(index) {
            Vue.set(this.products, index, {
                ...this.products[index],
                stock: this.cartItems[index].qty + this.products[index].stock,
            });
        },
    },
    watch: {
        cartItems: {
            handler() {
                console.log("calculating new total..");
                this.calculateTotal();
            },
            deep: true,
        },
    },
};
</script>

<style></style>
