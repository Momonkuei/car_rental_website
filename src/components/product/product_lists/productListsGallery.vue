<template>
  <div class="product-lists-gallery">
    <div class="product-lists-gallery-box">
      <div class="product-lists-gallery-item" v-for="(product, i) in products" :key="i">
        <a href="javascript:void(0);" class="product-lists-gallery-item-link">
          <carousel
            ref="myCarousels"
            snapAlign="start"
            class="product-lists-gallery-item-imgBoxList product-lists-gallery-item-imgBoxList-1"
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

          <div class="product-lists-gallery-item-functionColumn">
            <div class="product-lists-gallery-item-labelLists" v-for="label in product.labels">
              <span class="product-lists-gallery-item-label">{{ label }}</span>
            </div>
          </div>
        </a>

        <div class="product-lists-gallery-item-info">
          <div class="title">
            <span>{{ product.name }}</span>
          </div>

          <div class="price fz-14">
            <span class="original-price">
              <del>NT${{ product.originalPrice }}</del>
            </span>
            <span class="selling-price"> NT${{ product.sellingPrice }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },

  setup() {
    const products = ref([
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
    ])

    const myCarousels = ref(null)

    const handleNext = (i) => {
      const carousel = myCarousels.value[i]
      if (carousel) {
        carousel.next()
      }
    }

    const handlePrev = (i) => {
      const carousel = myCarousels.value[i]
      if (carousel) {
        carousel.prev()
      }
    }

    return {
      products,
      handleNext,
      handlePrev,
      myCarousels
    }
  }
}
</script>

<style lang="scss">
.product-lists-gallery-item {
  &:hover {
    .carousel__prev,
    .carousel__next {
      opacity: 1;
    }
  }
}
</style>
