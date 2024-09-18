<template>
  <div class="header-navbar-container">
    <main-menu></main-menu>
    <div class="navbar justify-content-end">
      <user-items></user-items>
      <mobile-menu-button></mobile-menu-button>
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue'
import UserItems from './UserItems..vue'
import MobileMenuButton from './MobileMenuButton.vue'

export default {
  components: {
    MainMenu,
    UserItems,
    MobileMenuButton
  }
}
</script>

<style lang="scss" scoped></style>
