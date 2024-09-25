<template>
  <div class="product-gallery">
    <div class="product-gallery-box">
      <Carousel
        v-if="isMobile"
        class="product-gallery-lists"
        v-model="currentSlide"
        :wrap-around="false"
      >
        <Slide class="product-gallery-item" v-for="(img, idx) in images" :key="idx">
          <div class="img-box">
            <img :src="img" alt="" />
          </div>
        </Slide>
      </Carousel>

      <div class="product-gallery-subBox">
        <Carousel
          v-if="isMobile"
          class="product-gallery-sublists"
          v-model="currentSlide"
          :items-to-show="4"
        >
          <Slide class="product-gallery-subItem" v-for="(img, idx) in images" :key="idx">
            <div class="img-box" @click="slideTo(idx)">
              <img :src="img" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>

      <!-- 非手機模式下顯示的內容 -->
      <ul class="product-gallery-lists" v-if="!isMobile">
        <li class="product-gallery-item" v-for="(img, idx) in images" :key="idx">
          <div class="img-box">
            <img :src="img" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      isMobile: false, // 判斷是否為手機版
      images: [
        '/images/product/product_detail/001.jpg',
        '/images/product/product_detail/002.jpg',
        '/images/product/product_detail/003.jpg'
      ],
      currentSlide: 0
    }
  },
  mounted() {
    this.checkWindowSize() // 初次檢查視窗大小
    window.addEventListener('resize', this.checkWindowSize) // 監聽視窗大小變化
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkWindowSize) // 移除監聽器
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth <= 576 // 設定手機版的寬度閾值，例如576px
    },
    slideTo(val) {
      this.currentSlide = val
    }
  }
}
</script>
