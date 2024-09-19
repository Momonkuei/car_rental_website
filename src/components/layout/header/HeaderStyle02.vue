<template>
  <header id="header" class="headerStyle02 open-wrap-box">
    <div class="header-navbar-box">
      <a href="/" class="d-flex">
        <img src="/images/header/centurion_logo.png" alt="logo" class="main-logo" />
      </a>
      <navbar-header></navbar-header>
    </div>

    <div class="fullMenu-mask"></div>

    <!-- 選單 -->
    <full-menu></full-menu>
  </header>
</template>

<script>
import NavbarHeader from './NavbarHeader.vue'
import FullMenu from './FullMenu.vue'

export default {
  components: {
    NavbarHeader,
    FullMenu
  }
}
</script>
