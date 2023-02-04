<template>
    <div>
        <section>
            <div class="viewed-goods-wrapper">
                <div class="viewed-goods-wrapper__text-pag-wrapper">
                    <div class="viewed-goods-wrapper__text-pag-wrapper__text">
                        Просмотренные товары
                    </div>
                    <div class="viewed-goods-wrapper__text-pag-wrapper__pag">
                        <button class="viewed-goods-wrapper__text-pag-wrapper__pag__button-left">
                            <img src="@/assets/img/slider/arrowLeft.svg" alt="">
                        </button>
                        <div class="viewed-goods-wrapper__text-pag-wrapper__pag__num ">

                        </div>
                        <button class="viewed-goods-wrapper__text-pag-wrapper__pag__button-right">
                            <img src="@/assets/img/slider/arrowRight.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="swiper-wrapper">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(slide, index) in GOODS_ENSURED" :key="index">
                        <div class="swiper-slide__wrapper">
                            <div class="swiper-slide__wrapper__img">
                                <img :src="slide.img" alt="">
                            </div>
                            <div class="swiper-slide__wrapper__name">
                                {{ slide.name }}
                            </div>
                            <div class="swiper-slide__wrapper__descr">
                                {{ slide.descr }}
                            </div>
                            <div class="swiper-slide__wrapper__price">
                                <div class="swiper-slide__wrapper__price-ru">
                                    {{ slide.valPriceRu }}
                                </div>
                                <div class="swiper-slide__wrapper__price-eu">
                                    {{ slide.valPriceEu }}
                                </div>
                            </div>
                            <button class="swiper-slide__wrapper__button">
                                Подробнее
                            </button>
                        </div>
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-navigation" slot="navigation"></div>

                </swiper>
            </div>

        </section>
    </div>

</template>

<script>


export default {
    name: 'carrousel',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.viewed-goods-wrapper__text-pag-wrapper__pag__num ',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.viewed-goods-wrapper__text-pag-wrapper__pag__button-right',
                    prevEl: '.viewed-goods-wrapper__text-pag-wrapper__pag__button-left',
                },
                slidesPerView: 4,
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
        GOODS_ENSURED() {
            return this.$store.getters.GET_GOODS_ENSURED
        }
    },

}


</script>

<style>
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal>.swiper-pagination-bullets {
    width: 35px !important;
}

.swiper-pagination-current {
    font-size: 20px;
    color: #212121;
}
</style>