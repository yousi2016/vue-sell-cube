<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="log-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':tatalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0"></div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{payDesc}}</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'shop-cart',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    }
  },
  totalCount() {
    let count = 0
    this.selectFoods.forEach((food) => {
      count += food.count
    })
    return count
  },
  payDesc() {
    if (this.totalPrice === 0) {
      return `￥${this.minPrice}元起送`
    } else if (this.totalPrice < this.minPrice) {
      let diff = this.minPrice - this.totalPrice
      return `还差￥${diff}元起送`
    } else {
      return `去结算`
    }
  },
  payClass() {
    if (!this.totalCount || this.totalPrice < this.minPrice) {
      return 'not-enough'
    } else {
      return 'enough'
    }
  }
}
</script>
