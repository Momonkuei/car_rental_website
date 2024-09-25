<template>
  <header
    id="header"
    class="headerStyle02 open-wrap-box"
    ref="header"
    :class="{ scroll: isScrolled, 'finish-banner': finishBanner }"
  >
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
  },
  data() {
    return {
      isScrolled: false,
      finishBanner: false,
      hdTop: 0,
      bannerTop: 0
    }
  },
  // mounted 掛載完成
  mounted() {
    this.hdTop = this.$refs.header.offsetHeight

    this.bannerTop = document.querySelector('.pic-box')?.offsetHeight || 0

    window.addEventListener('scroll', this.handleScroll)

    if (document.body.classList.contains('index')) {
      // 初始化首頁滾動效果
      this.handleScroll()
    }
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (document.body.classList.contains('index')) {
        if (scrollTop > this.hdTop) {
          this.isScrolled = true
          this.finishBanner = false
        } else {
          this.isScrolled = false
          if (document.querySelector('.bannerBlock')?.classList.contains('moveUp-banner')) {
            this.finishBanner = true
            document.boby.style.overflow = ''
            document.body.style.touchAction = 'none'
            document.body.style.webkitUserSelect = 'none'
            document.body.style.webkitTouchCallout = 'none'
            document.body.style.webkitUserDrag = 'none'
            document.body.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0)'
          }
        }
      } else {
        // 非首頁滾動邏輯

        if (scrollTop > this.hdTop) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      }
    }
  }
}
</script>
