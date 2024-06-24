import goodsList from './js/components/goodsList';
import goodsItem from './js/components/goodsItem';
import emptyGoodsList from './js/components/emptyGoodsList';
import cartItem from './js/components/cartItem';
import cartList from './js/components/cartList';
import searchBlock from './js/components/searchBlock';
import footer from './js/components/footer';

const init = () => {
    const API_URL = "http://localhost:3000";
    const app = new Vue({
        el: '#app',
        data: {
            goods: [],
            filteredGoods: [],
            cartGoods: [],
            searchLine: '',
            isVisibleCart: true
        },
        methods: {
            filterGoods(searchLine) {
                this.filteredGoods = this.filteredGoods.filter((item) => item.title.toLowerCase() === searchLine.toLowerCase());
            },
            async getProducts() {
                const responce = await fetch(`${API_URL}/catalogData`);
                if (responce.ok) {
                    const catalogItems = await responce.json();
                    this.goods = catalogItems;
                    this.filteredGoods = catalogItems;
                } else {
                    alert('Server connection error');
                }
            },
            async getCartProducts() {
                const responce = await fetch(`${API_URL}/cartData`);
                if (responce.ok) {
                    const cartItems = await responce.json();
                    this.cartGoods = cartItems;
                } else {
                    alert('Server connection error');
                }
            }
        },
        async mounted() {
            await this.getProducts();
            await this.getCartProducts();
        }
    });
}
window.onload = init;