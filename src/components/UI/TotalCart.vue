<template>
    <div class="cart-wrapper__total-info">
        <div class="cart-wrapper__total-info__img">
            <img src="@/assets/img/Cart.svg" alt="">
        </div>
        <div class="cart-wrapper__total-info__info-wrapper">
            <div class="cart-wrapper__total-info__info-wrapper__title">
                Ваша корзина
            </div>
            <div class="cart-wrapper__total-info__info-wrapper__count">
                {{ GOODS.length }} товара
            </div>
            <div class="cart-wrapper__total-info__info-wrapper__total">
                {{ TOTAL.toLocaleString() }} ₽
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        TOTAL() {
            return this.$store.getters.TOTAL_PRICE
        },
        TOTAL_QNT() {
            return this.$store.getters.TOTAL_QNT
        },
        GOODS() {
            return this.$store.getters.GET_GOODS
        }
    }
}


</script>

<style>

</style>