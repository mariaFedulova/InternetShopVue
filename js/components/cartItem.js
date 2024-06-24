const API_URL = "http://localhost:3000";
const cartItem = Vue.component('cart-item', {
    props: ['item'],
    template: `<div class="cart__item">
                    <img class="cart__img" :src="item['img']" :alt="item['title']" width="10%">
                    <div class="cart__info">
                        <h3 class="goods__card-header">{{item.title}}</h3>
                        <p class="goods__card-text">{{item.descr}}</p>
                        <p class="goods__card-price">$ {{ item.price }}</p>
                        <p class="goods__card-price">Количество: {{ item.count }}</p>
                        <button class="cart__delete-from-cart-button" type="button" @click=deleteFromCart>Delete</button>
                    </div>
                </div>`,
    methods: {
        async deleteFromCart() {
            const responce = await fetch(`${API_URL}/deleteFromCart`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.item)
            })
        }
    }
});

export default {
    cartItem: cartItem
}