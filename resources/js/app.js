/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Root
Vue.component('cart-component', require('./components/CartComponent.vue').default);

// Products
Vue.component('list-product-component', require('./components/ListProductComponent.vue').default);
Vue.component('product-row-component', require('./components/ProductRowComponent.vue').default);

// Carts
Vue.component('list-cart-component', require('./components/ListCartComponent.vue').default);
Vue.component('cart-row-component', require('./components/CartRowComponent.vue').default);

// Modal
Vue.component('centered-modal', require('./components/CenteredModal.vue').default);

// Checkout Modal
Vue.component('checkout-modal-content', require('./components/CheckoutModalContent.vue').default);
Vue.component('checkout-modal-footer', require('./components/ProductModalFooter.vue').default);

// Product Modal
Vue.component('product-modal-content', require('./components/ProductModalContent.vue').default);
Vue.component('product-modal-footer', require('./components/ProductModalFooter.vue').default);

// Reset Modal
Vue.component('reset-modal-content', require('./components/ResetModalContent.vue').default);
Vue.component('reset-modal-footer', require('./components/ResetModalFooter.vue').default);


// Button
Vue.component('button-component', require('./components/ButtonComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
