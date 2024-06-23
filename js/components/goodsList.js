const goodsList = Vue.component('goods-list', {
    props: ['goods'],
    template: `<div class="goods-list" >
                    <goods-item v-if="goods.length !== 0" v-for="item in goods" :item="item"></goods-item>
                </div>`
});

export default {
    goodsList: goodsList
}