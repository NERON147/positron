<template>
    <div class="goods-wrapper-content">
        <div class="goods-wrapper-content__img">
            <img :src="good.img" alt="">
        </div>
        <div class="goods-wrapper-content__info-wrapper">
            <div class="goods-wrapper-content__info-wrapper__name">
                {{ good.name }}
            </div>
            <div class="goods-wrapper-content__info-wrapper__characteristics">
                {{ good.char }}
            </div>
            <div class="goods-wrapper__content__info-wrapper__article">
                {{ good.article }}
            </div>
        </div>
        <div class="goods-wrapper-content__counter-wrapper">
            <div class="goods-wrapper-content__counter-wrapper__content">
                <button class="goods-wrapper-content__counter-wrapper__content__decr" @click="DECREMENT(index)">
                    -
                </button>
                <div class="goods-wrapper-content__counter-wrapper__content__number">
                    {{ good.quantity }}
                </div>
                <button class="goods-wrapper-content__counter-wrapper__content__incr" @click="INCREMENT(index)">
                    +
                </button>
            </div>
            <div class="goods-wrapper-content__counter-price" v-if="good.quantity > 1">
                {{ good.price.toLocaleString() }} ₽/шт.
            </div>
        </div>
        <div class="goods-wrapper-content__price-total-wrapper">
            {{ good.totalPrice.toLocaleString() }} ₽
        </div>
        <button class="goods-wrapper-content__close" @click="DELETE(index)">
            <img src="@/assets/img/goods/X.svg" alt="">
        </button>
        <div class="goods-wrapper-content__line"></div>
    </div>
</template>

<script>

export default {
    props: ['good', 'index'],
    methods: {
        DELETE(index) {
            this.$store.dispatch('DELETE_FROM_CART', index)
        },
        INCREMENT(index) {
            this.$store.dispatch('INCREMENT_CART_ITEM', index)
        },
        DECREMENT(index) {
            this.$store.dispatch('DECREMENT_CART_ITEM', index)
        },
    },
    computed: {
        TOTAL() {
            return this.$store.getters.TOTAL_PRICE
        }
    }
}

</script>

<style>

</style>