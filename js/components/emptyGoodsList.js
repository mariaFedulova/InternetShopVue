const emptyGoodsList = Vue.component('empty-goods-list', {
    props: ['goods'],
    template: `<div class="goods-list" v-if="goods.length === 0">
                    <p>Товаров нет</p>
                </div>`
})

export default {
    emptyGoodsList: emptyGoodsList
}