import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
        id: 1,
        name: 'BXC',
        img: require('@/assets/img/goods/BXC.png'),
        descr: 'Вытяжное устройство для механической системы вентиляции',
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        totalQuantity: 1,
        quantity: 1
      },
      {
        id: 2,
        name: 'G2H',
        img: require('@/assets/img/goods/g2h.png'),
        descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        totalQuantity: 1,
        quantity: 1
      },
      {
        id: 3,
        name: 'GHN',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/ghn.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        totalQuantity: 1,
        quantity: 1
      }
    ],
    goodsEnsured: [
      {
        id: 1,
        name: 'BXC',
        img: require('@/assets/img/goods/BXC.png'),
        descr: 'Вытяжное устройство для механической системы вентиляции',
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 2,
        name: 'G2H',
        img: require('@/assets/img/goods/g2h.png'),
        descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 3,
        name: 'GHN',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/ghn.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 4,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 5,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 6,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 7,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 8,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },
      {
        id: 9,
        name: 'TDA',
        descr: 'Вытяжное устройство с датчиком присутствия',
        img: require('@/assets/img/goods/tda.png'),
        char: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'Артикул: G2H1065',
        valPriceRu: '6 848 ₽ – 56 584 ₽',
        valPriceEu: '77.60 € – 643.86 €',
        price: 12644,
        totalPrice: 12644,
        quantity: 1,
        totalQuantity: 1
      },

    ]

  },
  mutations: {
    REMOVE_FROM_CART(state, index) {
      state.goods.splice(index, 1)

    },
    INCREMENT(state, index) {
      state.goods[index].quantity++
      state.goods[index].totalQuantity--
      state.goods[index].totalPrice = state.goods[index].price * state.goods[index].quantity

    },
    DECREMENT(state, index) {
      if (state.goods[index].quantity > 1) {
        state.goods[index].quantity--
        state.goods[index].totalQuantity--
        state.goods[index].totalPrice = state.goods[index].totalPrice - state.goods[index].price
      }
    },
    CLEAR_CART(state) {
      state.goods = []
    }
  },
  actions: {
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    },
    CLEAR_CART({ commit }) {
      commit('CLEAR_CART')
    },
    async pushOrder({ commit }, message) {
      const orderToTG = message
      const chatId = "-1001885066800";
      try {
        await axios.post(`https://api.telegram.org/bot6184088695:AAENYuIPMGLR_rjO6hlPlqKnpshWbynuAw8/sendMessage`, {
          chat_id: chatId,
          parse_mode: 'html',
          text: orderToTG,
        })
      }
      catch (error) {
        console.warn(error)
      }
    },
  },
  getters: {
    GET_GOODS(state) {
      return state.goods
    },
    GET_GOODS_ENSURED(state) {
      return state.goodsEnsured
    },
    TOTAL_PRICE(state) {
      let result = []

      if (state.goods.length) {
        for (let item of state.goods) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el
        })

        return result
      } else {
        return 0
      }
    },
    TOTAL_QNT(state) {
      let result = []

      if (state.goods.length) {
        for (let item of state.goods) {
          result.push(item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el
        })

        return result
      } else {
        return 0
      }
    }
  }
})
