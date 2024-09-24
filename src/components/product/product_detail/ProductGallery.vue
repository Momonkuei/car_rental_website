<template>
  <div class="product-gallery">
    <div class="product-gallery-box">
      <vue-slick-carousel
        v-if="isMobile"
        class="product-gallery-lists"
        :settings="carouselSettings"
      >
        <div class="product-gallery-item" v-for="(img, idx) in images" :key="idx">
          <div class="img-box">
            <img :src="img" alt="" />
          </div>
        </div>
      </vue-slick-carousel>

      <!-- 非手機模式下顯示的內容 -->
      <ul class="product-gallery-lists">
        <li class="product-gallery-item" v-for="(img, idx) in images" :key="idx">
          <div class="img-box">
            <img :src="img" alt="" />
          </div>
        </li>
      </ul>
    </div>

    <div class="product-gallery-subBox">
      <vue-slick-carousel
        v-if="isMobile"
        class="product-gallery-sublists"
        :settings="carouselSettings"
      >
        <div class="product-gallery-subItem" v-for="(img, idx) in images" :key="idx">
          <div class="img-box">
            <img :src="img" alt="" />
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      isMobile: false, // 判斷是否為手機版
      images: [
        '/images/product/product_detail/001.jpg',
        '/images/product/product_detail/002.jpg',
        '/images/product/product_detail/003.jpg'
      ],
      carouselSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  }
}
</script>
