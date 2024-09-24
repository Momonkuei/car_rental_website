<template>
  <div class="product-info-box">
    <div class="product-info-box-container">
      <div class="product-item-box">
        <div class="product-item">
          <div class="product-item-label-lists">
            <span class="product-item-label">NEW</span>
            <span class="product-item-label">限量特價</span>
            <span class="product-item-label">30% OFF</span>
          </div>

          <!-- 標題 -->
          <div class="product-item-title">
            <span class="title heading"> EXCELL限量版</span>
          </div>

          <!-- price -->
          <div class="product-item-price">
            <span class="original-price">
              <del>NT$9000</del>
            </span>
            <span class="selling-price"> NT$7480 </span>
          </div>

          <!-- 商品特點 -->
          <div class="product-item-feature">
            <ul class="heading product-item-feature-lists">
              <li>
                <span>箱身專利 PC+ABS 材質</span>
              </li>
              <li>
                <span>TSA007海關鎖</span>
              </li>
              <li>
                <span> 日本頂級靜音大八輪 </span>
              </li>
            </ul>
          </div>

          <!-- 控制數量 -->
          <div class="product-item-quantity">
            <div class="product-item-quantity-box">
              <span class="product-item-quantity-title fz-14">數量</span>
              <div class="product-item-quantity-counts">
                <div class="QTY-selector">
                  <a
                    href="javascript:void(0);"
                    class="QTY-selector-btn quantity-reduce"
                    @click="reduceQTY"
                  >
                    <i class="bi bi-dash"></i>
                  </a>
                  <input
                    type="text"
                    class="QTY-selector-currentNum product-item-num fz-12"
                    v-model="productQty"
                  />
                  <a
                    href="javascript:void(0);"
                    class="QTY-selector-btn quantity-plus"
                    @click="plusQty"
                  >
                    <i class="bi bi-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-item-btnGroup">
            <button class="cart-chcekout-btn btn-full">放入購物車</button>
          </div>
        </div>

        <product-item-collapsible-lists></product-item-collapsible-lists>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItemCollapsibleLists from './ProductItemCollapsibleLists.vue'
export default {
  components: {
    ProductItemCollapsibleLists
  },

  data() {
    return {
      productQty: 0
    }
  },
  methods: {
    plusQty() {
      this.productQty++
    },
    reduceQTY() {
      this.productQty--
    }
  },
  watch: {
    productQty: function (newValue, oldValue) {
      if (newValue < 0) {
        this.productQty = oldValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $primary;
}
</style>
