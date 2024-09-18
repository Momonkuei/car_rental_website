<template>
  <header id="header" class="headerStyle02 open-wrap-box">
    <div class="header-navbar-box">
      <a href="/" class="d-flex">
        <img src="/images/header/centurion_logo.png" alt="logo" class="main-logo" />
      </a>
      <navbar-header></navbar-header>
    </div>
  </header>
</template>

<script>
import NavbarHeader from './NavbarHeader.vue'

export default {
  components: {
    NavbarHeader
  },

  mounted() {
    this.initDropdownMenu()
  },

  methods: {
    initDropdownMenu() {
      const headerStyle02 = document.querySelector('.headerStyle02')
      if (headerStyle02) {
        document.querySelectorAll('header .navMenu .navMenu-link').forEach((link) => {
          link.addEventListener('mouseover', function () {
            document
              .querySelectorAll('header .navMenu > li')
              .forEach((item) => item.classList.remove('active-wrap-box'))
            this.parentNode.classList.add('active-wrap-box')
            document.querySelector('header').classList.add('open-wrap-box')

            // 如果有 wrap-box 增加遮罩
            if (this.parentNode.querySelector('.wrap-box')) {
              document.body.classList.add('open-wrap-box')
            }

            const firstItem = this.parentNode.querySelector(
              '.wrap-box-menu .item[data-sub-list-item="0"]'
            )
            if (firstItem) {
              firstItem.classList.add('active')
              this.parentNode.querySelector(
                '.wrap-box-detail [data-target-sub-list-item="0"]'
              ).style.display = 'block'
            }
          })
        })

        document.querySelectorAll('header .navMenu > li').forEach((li) => {
          li.addEventListener('mouseleave', function () {
            this.classList.remove('active-wrap-box')
            document.querySelector('header').classList.remove('open-wrap-box')
            document.body.classList.remove('open-wrap-box')
            const activeItem = this.querySelector('.wrap-box-menu .item.active')
            if (activeItem) activeItem.classList.remove('active')
            this.querySelectorAll('.wrap-box-detail [data-target-sub-list-item]').forEach(
              (detail) => {
                detail.style.display = 'none'
              }
            )
            this.querySelectorAll('.info-wrap-block-box li.active').forEach((item) => {
              item.classList.remove('active')
            })
            this.querySelectorAll('.info-sub-wrap').forEach((subWrap) => {
              subWrap.style.display = 'none'
            })
          })
        })

        // 點擊側拉項目時更換選單
        document.querySelectorAll('.wrap-box-menu .item-link').forEach((link) => {
          link.addEventListener('click', function () {
            const subListItemData = this.parentNode.dataset.subListItem
            document
              .querySelectorAll('.wrap-box-menu .item')
              .forEach((item) => item.classList.remove('active'))
            this.parentNode.classList.add('active')
            document.querySelectorAll('.wrap-box-detail .info-wrap').forEach((infoWrap) => {
              infoWrap.style.display = 'none'
            })
            document.querySelectorAll('.wrap-box-sub-detail .info-sub-wrap').forEach((subWrap) => {
              subWrap.style.display = 'none'
            })
            document.querySelector(
              '.wrap-box-detail .info-wrap[data-target-sub-list-item="' + subListItemData + '"]'
            ).style.display = 'block'
          })
        })

        // Hover 時出現第三項選單
        document.querySelectorAll('.wrap-box-detail .info-wrap-link').forEach((link) => {
          link.addEventListener('mouseover', function () {
            const thirdListItemData = this.parentNode.dataset.thirdListItem
            this.closest('ul')
              .querySelectorAll('li')
              .forEach((li) => li.classList.remove('active'))
            this.parentNode.classList.add('active')
            document.querySelectorAll('.wrap-box-sub-detail .info-sub-wrap').forEach((subWrap) => {
              subWrap.style.display = 'none'
            })

            if (!thirdListItemData) {
              return
            }

            document.querySelector(
              '.wrap-box-sub-detail .info-sub-wrap[data-target-sub-list-item="' +
                thirdListItemData +
                '"]'
            ).style.display = 'block'
          })
        })

        // 控制側邊選單內容中層的選項寬度
        document.querySelectorAll('.wrap-box-detail .info-wrap-block-box ul').forEach((ul) => {
          const itemNums = ul.children.length
          if (itemNums <= 10) {
            ul.style.gridTemplateColumns = 'repeat(2, calc((100% - 2.2rem) / 2))'
          } else {
            const rowNum = Math.ceil(itemNums / 5)
            ul.style.gridTemplateColumns = `repeat(${rowNum}, calc((100% - 2.2rem) / 2))`
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
