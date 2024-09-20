<template>
  <div class="page-product_detail">
    <product-gallery></product-gallery>
    <product-info></product-info>
  </div>
  <related-products></related-products>
</template>

<script>
import ProductGallery from '@/components/product/product_detail/ProductGallery.vue'
import ProductInfo from '@/components/product/product_detail/ProductInfo.vue'
import RelatedProducts from '@/components/product/product_detail/RelatedProducts.vue'

export default {
  components: {
    ProductGallery,
    ProductInfo,
    RelatedProducts
  }
}
</script>

<style></style>
