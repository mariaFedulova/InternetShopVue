(()=>{"use strict";Vue.component("goods-list",{props:["goods"],template:'<div class="goods-list" >\n                    <goods-item v-if="goods.length !== 0" v-for="item in goods" :item="item"></goods-item>\n                </div>'}),Vue.component("goods-item",{props:["item"],template:'<div>\n                    <h3 class="products__card-header">{{item.title}}</h3>\n                    <p class="products__card-text">{{item.descr}}</p>\n                    <p class="products__card-price">$ {{ item.price }}</p>\n                    <button type="button" @click=addToCart>Add To Cart</button>\n                </div>',methods:{async addToCart(){await fetch("http://localhost:3000/addToCart",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.item)})}}}),Vue.component("empty-goods-list",{props:["goods"],template:'<div class="goods-list" v-if="goods.length === 0">\n                    <p>Товаров нет</p>\n                </div>'}),Vue.component("cart-item",{props:["item"],template:'<div>\n                    <h3 class="products__card-header">{{item.title}}</h3>\n                    <p class="products__card-text">{{item.descr}}</p>\n                    <p class="products__card-price">$ {{ item.price }}</p>\n                    <p class="products__card-price">Количество: {{ item.count }}</p>\n                    <button type="button" @click=deleteFromCart>Delete</button>\n                </div>',methods:{async deleteFromCart(){await fetch("http://localhost:3000/deleteFromCart",{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.item)})}}}),Vue.component("cart-list",{props:["isvisiblecart","cartgoods"],template:'<div class="cart-list">\n                    <h2>КОРЗИНА</h2>\n                    <cart-item v-if="isvisiblecart" v-for="cartItem in cartgoods" :item="cartItem"></cart-item>\n                </div>'}),Vue.component("search-block",{template:'<div class="header__search">\n                    <input type="text" class="header__search-goods" v-model="searchLine"/>\n                    <button class="header__search-button" type="button" @click="searchClick">Искать</button>\n                </div>',data:()=>({searchLine:""}),methods:{searchClick(){this.$emit("click-search",this.searchLine)}}}),window.onload=()=>{const t="http://localhost:3000";new Vue({el:"#app",data:{goods:[],filteredGoods:[],cartGoods:[],searchLine:"",isVisibleCart:!0},methods:{filterGoods(t){this.filteredGoods=this.filteredGoods.filter((e=>e.title.toLowerCase()===t.toLowerCase()))},async getProducts(){const e=await fetch(`${t}/catalogData`);if(e.ok){const t=await e.json();this.goods=t,this.filteredGoods=t}else alert("Server connection error")},async getCartProducts(){const e=await fetch(`${t}/cartData`);if(e.ok){const t=await e.json();this.cartGoods=t}else alert("Server connection error")}},async mounted(){await this.getProducts(),await this.getCartProducts()}})}})();