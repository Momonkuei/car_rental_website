<template>
  <div class="related-products-gallery-box">
    <!-- <div class="related-products-gallery-item">
      <a href="https://www.google.com.tw/?hl=zh_TW">
        <carousel
          :per-page="1"
          :navigate-to="someLocalProperty"
          :mouse-drag="false"
          class="related-products-gallery-item-imgBoxList related-products-gallery-item-imgBoxList-1"
        >
          <slide class="">
            <div class="img-box">
              <img src="/images/product/products/02.jpg" alt="" />
            </div>
          </slide>

          <slide class="">
            <div class="img-box">
              <img src="/images/product/product_detail/002.jpg" alt="" />
            </div>
          </slide>

          <slide class="">
            <div class="img-box">
              <img src="/images/product/product_detail/003.jpg" alt="" />
            </div>
          </slide>
        </carousel>

        <div class="related-products-gallery-item-labelLists">
          <span class="related-products-gallery-item-label">NEW</span>
        </div>

        <div class="related-products-gallery-item-info">
          <div class="title">
            <span>九尾粉狐 旅行箱</span>
          </div>
          <div class="price fz-14">
            <span class="original-price"> <span>NT</span><del>NT$9000</del> </span>
            <span class="selling-price"> <span>NT</span>$7480 </span>
          </div>
        </div>
      </a>
    </div> -->

    <Carousel>
      <slide> Slide 1 Content </slide>
      <slide> Slide 2 Content </slide>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
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
          label: 'NEW',
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
          link: 'https://www.google.com.tw/?hl=zh_TW',
          images: [
            '/images/product/products/03.jpg',
            '/images/product/product_detail/002.jpg',
            '/images/product/product_detail/003.jpg'
          ]
        }
        // 其他产品信息
      ],
      settings: {
        arrows: true,
        dots: true
      }
    }
  }
}
</script>
