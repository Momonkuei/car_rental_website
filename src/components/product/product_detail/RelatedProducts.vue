<template>
  <div class="related-products-gallery">
    <div class="related-products-gallery-title">
      <span class="heading">其他相關商品</span>
    </div>

    <div class="related-products-gallery-box">
      <div
        class="related-products-gallery-item"
        v-for="(product, i) in products"
        :key="product.name"
      >
        <a :href="product.link" target="_blank">
          <carousel
            ref="myCarousels"
            snapAlign="start"
            class="related-products-gallery-item-imgBoxList related-products-gallery-item-imgBoxList-1"
          >
            <slide class="" v-for="img in product.images" :key="img">
              <div class="img-box">
                <img :src="img" alt="" />
              </div>
            </slide>

            <template #addons>
              <navigation>
                <template #next>
                  <span @click.prevent.stop="handleNext(i)"
                    ><i class="bi bi-chevron-right"></i
                  ></span>
                </template>
                <template #prev>
                  <span @click.prevent.stop="handlePrev(i)"
                    ><i class="bi bi-chevron-left"></i
                  ></span>
                </template>
              </navigation>
            </template>
          </carousel>

          <div class="related-products-gallery-item-labelLists">
            <span class="related-products-gallery-item-label" v-for="label in product.labels">{{
              label
            }}</span>
          </div>

          <div class="related-products-gallery-item-info">
            <div class="title">
              <span>{{ product.name }}</span>
            </div>
            <div class="price fz-14">
              <span class="original-price">
                <span>NT</span><del>{{ product.originalPrice }}</del>
              </span>
              <span class="selling-price"> <span>NT</span>{{ product.sellingPrice }} </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'RelatedProducts',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      products: [
        {
          name: '九尾粉狐 旅行箱',
          originalPrice: '9000',
          sellingPrice: '7480',
          link: 'https://www.google.com.tw/?hl=zh_TW',
          labels: ['NEW'],
          images: [
            '/images/product/products/02.jpg',
            '/images/product/product_detail/002.jpg',
            '/images/product/product_detail/003.jpg'
          ]
        },
        {
          name: '大海魚 旅行箱',
          originalPrice: '9000',
          sellingPrice: '7480',
          link: 'https://www.youtube.com/?app=desktop&hl=zh-tw',
          labels: [],
          images: [
            '/images/product/products/03.jpg',
            '/images/product/product_detail/002.jpg',
            '/images/product/product_detail/003.jpg'
          ]
        },
        {
          name: '大鯨魚 旅行箱',
          originalPrice: '9000',
          sellingPrice: '7480',
          link: 'https://www.youtube.com/?app=desktop&hl=zh-tw',
          labels: [],
          images: [
            '/images/product/products/04.jpg',
            '/images/product/product_detail/002.jpg',
            '/images/product/product_detail/003.jpg'
          ]
        },
        {
          name: '小海豚 旅行箱',
          originalPrice: '9000',
          sellingPrice: '7480',
          link: 'https://www.youtube.com/?app=desktop&hl=zh-tw',
          labels: [],
          images: [
            '/images/product/products/05.jpg',
            '/images/product/product_detail/002.jpg',
            '/images/product/product_detail/003.jpg'
          ]
        }
      ],

      myCarousel: null
    }
  },

  methods: {
    handleNext(i) {
      // 確認 $refs.myCarousels 是陣列並取到對應的 carousel
      const carousels = this.$refs.myCarousels
      const targetCarousel = carousels[i]
      console.log(i)
      if (targetCarousel) {
        targetCarousel.next() // 調用 next 方法
      }
    },
    handlePrev(i) {
      const carousels = this.$refs.myCarousels
      const targetCarousel = carousels[i]
      if (targetCarousel) {
        targetCarousel.prev()
      }
    }
  },
  mounted() {
    // 在 mounted 生命週期中取得 carousel 的參考
    this.myCarousel = this.$refs.myCarousel
  }
}
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  font-weight: 400;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 5;
  opacity: 0;
  transition: all 0.3s ease-in;
  color: #000;

  i {
    font-size: 1rem;
  }
}

.related-products-gallery-item {
  &:hover {
    .carousel__prev,
    .carousel__next {
      opacity: 1;
    }
  }
}
</style>
