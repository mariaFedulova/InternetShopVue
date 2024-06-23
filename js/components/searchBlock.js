const searchBlock = Vue.component('search-block', {
    template: `<div class="header__search">
                    <input type="text" class="header__search-goods" v-model="searchLine"/>
                    <button class="header__search-button" type="button" @click="searchClick">Искать</button>
                </div>`,
    data() {
        return {
            searchLine: ''
        }
    },
    methods: {
        searchClick() {
            this.$emit('click-search', this.searchLine);
        }
    }
});

export default {
    searchBlock: searchBlock
}