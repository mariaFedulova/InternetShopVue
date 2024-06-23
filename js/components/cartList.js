const cartList = Vue.component('cart-list', {
    props: ['isvisiblecart', 'cartgoods'],
    template: `<div class="cart-list">
                    <h2>КОРЗИНА</h2>
                    <cart-item v-if="isvisiblecart" v-for="cartItem in cartgoods" :item="cartItem"></cart-item>
                </div>`
});

export default {
    cartList: cartList
}