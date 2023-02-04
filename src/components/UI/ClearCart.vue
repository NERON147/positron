<template>
    <div class="your-cart-wrapper">
        <div class="your-cart-wrapper__text">
            <span class="your-cart-wrapper__text-big">Ваша корзина</span>
            <span class="your-cart-wrapper__text-small" v-if="GOODS.length == 0">0 товаров</span>
            <span class="your-cart-wrapper__text-small" v-else-if="TOTAL_QNT <= 1">{{ TOTAL_QNT }} товар</span>
            <span class="your-cart-wrapper__text-small" v-else-if="TOTAL_QNT <= 4">{{ TOTAL_QNT }} товара</span>
            <span class="your-cart-wrapper__text-small" v-else>{{ TOTAL_QNT }} товаров</span>
        </div>
        <button class="your-cart-wrapper__button-clear" @click="CLEAR_CART">
            Очистить корзину
        </button>
        <div class="your-cart-wrapper__helper"></div>
    </div>
</template>

<script>

export default {
    computed: {
        TOTAL_QNT() {
            return this.$store.getters.TOTAL_QNT
        },
        GOODS() {
            return this.$store.getters.GET_GOODS
        }
    },
    methods: {
        CLEAR_CART() {
            this.$store.dispatch('CLEAR_CART')
        }
    }
}


</script>

<style>

</style>