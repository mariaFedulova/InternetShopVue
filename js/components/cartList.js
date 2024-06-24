const cartList = Vue.component('cart-list', {
    props: ['isvisiblecart', 'cartgoods'],
    template: `<section class="cart-list">
                    <cart-item v-if="isvisiblecart" v-for="cartItem in cartgoods" :item="cartItem"></cart-item>
                </section>`
});

export default {
    cartList: cartList
}