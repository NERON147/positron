<template>
    <div class="cart-wrapper">
        <section>
            <TotalCart></TotalCart>
        </section>

        <section>
            <Navigation></Navigation>
        </section>

        <section>
            <ClearCart></ClearCart>
        </section>

        <section>

            <div class="goods-wrapper">
                <section>
                    <Goods v-for="(good, index) in GOODS" :key="good.id" :good='good' :index="index"></Goods>
                </section>

                <section>
                    <div class="total-wrapper">
                        <div class="total-wrapper__content">
                            <div class="total-wrapper__content__total-name">
                                Итого
                            </div>
                            <div class="total-wrapper__content__sum-wrapper">
                                <div class="total-wrapper__content__sum-wrapper__text">
                                    Сумма заказа
                                </div>
                                <div class="total-wrapper__content__sum-wrapper__total">
                                    {{ TOTAL.toLocaleString() }} ₽
                                </div>
                            </div>
                            <div class="total-wrapper__content__quantity-wrapper">
                                <div class="total-wrapper__content__quantity-wrapper__text">
                                    Количество
                                </div>
                                <div class="total-wrapper__content__quantity-wrapper__total">
                                    {{ TOTAL_QNT }} шт
                                </div>
                            </div>
                            <div class="total-wrapper__content__installation-wrapper">
                                <div class="total-wrapper__content__installation-wrapper__text">
                                    Установка
                                </div>
                                <div class="total-wrapper__content__installation-wrapper__toogle">
                                    {{ checkboxStatus }}
                                </div>
                            </div>
                            <div class="total-wrapper__content__line"></div>
                            <div class="total-wrapper__content__total-wrapper">
                                <div class="total-wrapper__content__total-wrapper__text">
                                    Стоимость товаров
                                </div>
                                <div class="total-wrapper__content__total-wrapper__total">
                                    {{ TOTAL.toLocaleString() }} ₽
                                </div>
                            </div>
                            <button class="total-wrapper__content__button-design" @click="orderToTG">
                                Оформить заказ
                            </button>
                            <button class="total-wrapper__content__button-one-click">
                                Купить в 1 клик
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <section>
            <div class="install-wrapper">
                <input type="checkbox" class="install-wrapper__check" v-model="checked">
                <img src="@/assets/img/check/check.svg" alt="">
                <div class="install-wrapper__text-wrapper">
                    <div class="install-wrapper__text-wrapper__text-install">
                        Установка
                    </div>
                    <div class="install-wrapper__text-wrapper-text-descr">
                        Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
                    </div>
                </div>
            </div>
        </section>

        <section>
            <SwiperUI></SwiperUI>
        </section>
    </div>
</template>

<script>
import Goods from "@/components/goods/Goods.vue"
import TotalCart from "@/components/UI/TotalCart.vue"
import Navigation from "@/components/UI/Navigation.vue"
import ClearCart from "@/components/UI/ClearCart.vue"
import SwiperUI from "@/components/UI/SwiperUI.vue"




export default {
    components: { Goods, TotalCart, Navigation, ClearCart, SwiperUI },
    data() {
        return {
            checked: false,
            goods: null
        }
    },
    computed: {
        GOODS() {
            return this.$store.getters.GET_GOODS
        },
        checkboxStatus() {
            if (this.checked) {
                return 'Да';
            } else {
                return 'Нет';
            }
        },
        TOTAL() {
            return this.$store.getters.TOTAL_PRICE
        },
        TOTAL_QNT() {
            return this.$store.getters.TOTAL_QNT
        }
    },
    methods: {
        orderToTG() {
            if(this.goods.length){let productItem = ''

            this.goods.forEach((item) => {
                productItem +=
                    `
  <b> Название товара: </b>  ${item.name} \n 
  <b> Описание товара: </b>  ${item.descr} \n 
  <b> Характеристика товара: </b>  ${item.char} \n 
  <b> Артикул товара: </b>  ${item.article} \n 
  <b> Нужно ли выполнить установку: </b>  ${this.checked} \n 
  <b> Цена товара: </b> ${item.price} \n 
  <b> Кол-во: </b>  ${item.quantity} \n
  `
            })

            let message = `<b> Пришел заказ, можно оформлять! </b>\n`;
            message += `<b> Товар:  </b>\n ${productItem}\n`
            message += `<b> Общая стоимость:</b>  ${this.TOTAL} ₽ \n`
            this.$store.dispatch('pushOrder', message)
                .then(() => {
                    this.$store.dispatch('CLEAR_CART')
                    this.checked = false
                    // this.$router.push('/success')
                    // location.reload()
                    // реализуется как вариант
                })}
        }
    },
    created() {
        this.goods = this.$store.getters.GET_GOODS
    }
}

</script>

<style>

</style>