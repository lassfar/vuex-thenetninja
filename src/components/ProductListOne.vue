
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProductListOne',
    computed: {
        products() {
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ]),
        // saleProducts() {
        //     return this.$store.getters.saleProducts;
        // }
    },
    methods: {
        ...mapActions([
            'reducePriceAction'
        ]),
        // reduce price method
        // reducePrice(amount) {
        //     // call mutation
        //     // this.$store.commit('reducePriceMutation');
        //     // call mutation
        //     this.$store.dispatch('reducePriceAction', amount);
        //     console.log("reduce price");
        // }
    }
}
</script>

<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="(product, idx) in saleProducts" :key="idx">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePriceAction(2)">Reduce Price for > 40£</button>
    </div>
</template>


<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>