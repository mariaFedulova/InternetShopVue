const API_URL = "http://localhost:3000";
const goodsItem = Vue.component('goods-item', {
    props: ['item'],
    template: `<section class="goods__item">
                    <img class="goods__img" :src="item['img']" :alt="item['title']" width="80%">
                    <h3 class="goods__card-header">{{item.title}}</h3>
                    <p class="goods__card-text">{{item.descr}}</p>
                    <p class="goods__card-price">$ {{ item.price }}</p>
                    <button class="goods__add-to-cart-button" type="button" @click=addToCart>Add To Cart</button>
                </section>`,
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