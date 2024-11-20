<template>
  <div class="header-navbar-container">
    <div class="navbar justify-content-end">
      <user-items></user-items>
      <mobile-menu-button></mobile-menu-button>
    </div>
  </div>
</template>

<script>
import UserItems from './UserItems..vue'
import MobileMenuButton from './MobileMenuButton.vue'

export default {
  components: {
    UserItems,
    MobileMenuButton
  }
}
</script>

<style lang="scss" scoped></style>
