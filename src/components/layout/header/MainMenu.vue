<template>
  <div class="navbar header-menu-box">
    <div class="header-menu d-flex">
      <ul class="navMenu">
        <li class="">
          <a href="javascript:void(0);" class="navMenu-link">
            <span> 旅遊用品 </span>
            <span class="icon-box">
              <i class="bi bi-chevron-down"></i>
            </span>
          </a>

          <!-- 側邊選單 -->

          <sub-menu></sub-menu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'

export default {
  components: {
    SubMenu
  }
}
</script>

<style lang="scss" scoped>
.navMenu-link {
  color: $primary;
}
</style>
