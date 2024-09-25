<template>
  <div>
    <headerStyle02></headerStyle02>
    <div class="header-fullMenu-mask"></div>
    <router-view></router-view>
    <footer-style-01></footer-style-01>
  </div>
</template>

<script>
import HeaderStyle02 from './components/layout/header/HeaderStyle02.vue'
import FooterStyle01 from './components/layout/footer/FooterStyle01.vue'

export default {
  components: {
    HeaderStyle02,
    FooterStyle01
  }
}
</script>
