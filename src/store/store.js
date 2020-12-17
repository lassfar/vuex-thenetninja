import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80},
        ]
    },
    getters: {
        // getters used to calculate data based on store state.
        saleProducts(state) {
            let saleProds = state.products.map((product) => {
                return {
                    name: product.price > 60 ? `### PROMO ### ${product.name}` : product.name,
                    price: product.price > 60 ? Math.floor(product.price/1.5) : product.price
                }
            });
            return saleProds;
        }
    },
    mutations: {
        // mutations can be tracked
        reducePriceMutation(state, payload) {
            state.products.forEach(product => {
                if (product.price > 40)
                    product.price -= payload;
            });
        }
    },
    actions: {
        // actions to execute asyncrounous operations, call mutations
        reducePriceAction(context, payload) {
            setTimeout(() => {
                context.commit('reducePriceMutation', payload);
            }, 1500);
        }
    }
});