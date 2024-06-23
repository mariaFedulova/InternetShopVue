const API_URL = "http://localhost:3000";
const cartItem = Vue.component('cart-item', {
    props: ['item'],
    template: `<div>
                    <h3 class="products__card-header">{{item.title}}</h3>
                    <p class="products__card-text">{{item.descr}}</p>
                    <p class="products__card-price">$ {{ item.price }}</p>
                    <p class="products__card-price">Количество: {{ item.count }}</p>
                    <button type="button" @click=deleteFromCart>Delete</button>
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