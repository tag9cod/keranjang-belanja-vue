<template>
    <div>
        <div
            class="d-flex justify-content-between align-items-center mb-3"
            v-for="(item, index) in bodyData.cartItems"
            :key="index"
        >
            <span id="checkout-item-name-qty"
                ><span class="name">{{ item.name }}</span>
                <span class="qty">({{ item.qty }})</span></span
            >
            <span class="ms-auto" id="checkout-item-price">
                Rp. {{ item.price }}
            </span>
        </div>
        <div class="d-flex justify-content-end align-items-end" id="flex-total">
            <span id="checkout-total">Total</span>
            <span id="checkout-total-price">Rp. {{ bodyData.total }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bodyData: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style>
#checkout-item-name-qty {
    min-width: min-content;
    max-width: fit-content;
}
#checkout-item-name-qty > .name {
    font-weight: 500;
}
#checkout-item-name-qty > .qty {
    font-size: 0.75rem;
}
#checkout-item-price {
    min-width: 6rem;
    max-width: 6rem;
    text-align: end;
}
#checkout-item-price,
#checkout-total-price {
    font-weight: 600;
}
#flex-total {
    gap: 1.5rem;
}
#checkout-total-price {
    border-top: 1px dashed #7c7d7e;
    padding-top: 1rem;
    /* border-style: ; */
}
</style>
