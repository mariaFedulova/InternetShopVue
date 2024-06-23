const API_URL = "http://localhost:3000";
const goodsItem = Vue.component('goods-item', {
    props: ['item'],
    template: `<div>
                    <h3 class="products__card-header">{{item.title}}</h3>
                    <p class="products__card-text">{{item.descr}}</p>
                    <p class="products__card-price">$ {{ item.price }}</p>
                    <button type="button" @click=addToCart>Add To Cart</button>
                </div>`,
    methods: {
        async addToCart() {
            const responce = await fetch(`${API_URL}/addToCart`, {
                method: 'POST',
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
    goodsItem: goodsItem
}