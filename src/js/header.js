document.addEventListener('DOMContentLoaded', function () {
  const headerStyle02 = document.querySelector('.headerStyle02')
  console.log('123456')

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
        this.querySelectorAll('.wrap-box-detail [data-target-sub-list-item]').forEach((detail) => {
          detail.style.display = 'none'
        })
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

  // 手機端 menu
  const header = document.querySelector('header')
  const slideMenuControl = document.querySelector('.slide-menu-control')
  const searchBox = document.querySelector('.search')

  slideMenuControl.addEventListener('click', function () {
    // 為 body 添加 'open-menu' 類
    document.body.classList.add('open-menu')
    // 移除 .searchBox 上的 'open' 類
    searchBox.classList.remove('open')
  })

  document.querySelectorAll('.fullMenu .close-btn, header .fullMenu-mask').forEach(function (ele) {
    ele.addEventListener('click', function () {
      console.log('123456')
      if (document.body.classList.contains('open-menu')) {
        document.body.classList.remove('open-menu')
      }
    })
  })

  document.querySelectorAll('.fullMenu .navMenu > li > a').forEach(function (element) {
    element.addEventListener('click', function () {
      // 添加 'open-secondMenu' 類別到 .navMenu
      document.querySelector('.fullMenu .navMenu').classList.add('open-secondMenu')

      // 檢查 li 是否包含 .second-menu，如果有則添加 'open-secondMenu' 類別
      if (this.closest('li').querySelector('.second-menu')) {
        this.closest('li').classList.add('open-secondMenu')
      }

      // 將 .fullMenu 滾動到頂部
      this.closest('.fullMenu').scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動
      })
    })
  })

  // 次選單 返回
  document
    .querySelectorAll('.second-menu .second-menu-content > .return-box a')
    .forEach(function (element) {
      element.addEventListener('click', function () {
        // 移除 'open-secondMenu' 類別從 .navMenu
        document.querySelector('.fullMenu .navMenu').classList.remove('open-secondMenu')

        // 如果 li 包含 .second-menu，則移除 'open-secondMenu' 類別
        if (this.closest('li').querySelector('.second-menu')) {
          this.closest('li').classList.remove('open-secondMenu')
        }
      })
    })

  // 第三層選單
  document.querySelectorAll('.second-menu .navMenu-second > li > a').forEach(function (element) {
    element.addEventListener('click', function () {
      const liElement = this.closest('li')
      const secondMenu = this.closest('.second-menu')
      const thirdMenu = this.nextElementSibling

      // 如果 li 包含 .third-menu，則加上 'open-thirdMenu' 類別
      if (liElement.querySelector('.third-menu')) {
        liElement.classList.add('open-thirdMenu')
      }

      const secondMenuHeight = secondMenu.offsetHeight
      const thirdMenuHeight = thirdMenu ? thirdMenu.offsetHeight : 0

      // 如果第三層選單比第二層高，設置 overflow: visible
      if (secondMenuHeight < thirdMenuHeight) {
        secondMenu.style.overflow = 'visible'
      }

      // 如果第二層選單比第三層高，調整第二層選單的高度
      if (secondMenuHeight > thirdMenuHeight) {
        secondMenu.style.height = `${thirdMenuHeight}px`
      }

      // 調整主選單的高度
      const navMenu = this.closest('.navMenu')
      navMenu.style.height = `${thirdMenuHeight}px`
      navMenu.style.overflow = 'hidden'

      // 滾動到頂部
      this.closest('.fullMenu').scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })

  // 第三選單返回
  document.querySelectorAll('.third-menu .return-box a').forEach(function (element) {
    element.addEventListener('click', function () {
      const secondMenu = this.closest('.second-menu')
      const liElement = this.closest('li')
      const navMenu = this.closest('.navMenu')

      // 移除 'open-thirdMenu' 類別
      secondMenu.classList.remove('open-thirdMenu')
      liElement.classList.remove('open-thirdMenu')

      // CSS 修正，清除樣式
      secondMenu.style.overflow = ''
      secondMenu.style.height = ''
      navMenu.style.height = ''
      navMenu.style.overflow = ''
    })
  })

  // 第四層選單
  document.querySelectorAll('.third-menu .navMenu-third > li > a').forEach(function (element) {
    element.addEventListener('click', function () {
      const liElement = this.closest('li')
      const thirdMenu = this.closest('.third-menu')
      const fourthMenu = this.nextElementSibling // 尋找下一個兄弟元素 .fourth-menu

      // 檢查是否有第四層選單
      if (liElement.querySelector('.fourth-menu')) {
        thirdMenu.classList.add('open-fourthMenu')
        liElement.classList.add('open-fourthMenu')
      }

      const fourthMenuHeight = fourthMenu ? fourthMenu.offsetHeight : 0

      // 設置第三層或第二層選單的高度及 overflow
      const secondMenu = this.closest('.second-menu')
      if (secondMenu) {
        secondMenu.style.height = `${fourthMenuHeight}px`
        secondMenu.style.overflow = 'hidden'
      }
      thirdMenu.style.height = `${fourthMenuHeight}px`
      thirdMenu.style.overflow = 'hidden'

      // 設置 navMenu 的高度及 overflow
      const navMenu = this.closest('.navMenu')
      if (navMenu) {
        navMenu.style.height = `${fourthMenuHeight}px`
        navMenu.style.overflow = 'hidden'
      }

      // 滾動到頂部
      this.closest('.fullMenu').scrollTo({ top: 0, behavior: 'smooth' })
    })
  })

  // 第四選單返回
  document.querySelectorAll('.fourth-menu .return-box a').forEach(function (element) {
    element.addEventListener('click', function () {
      const thirdMenuContent = this.closest('.third-menu-content')
      const thirdMenuHeight = thirdMenuContent ? thirdMenuContent.offsetHeight : 0
      const thirdMenu = this.closest('.third-menu')
      const liElement = this.closest('li')

      // 移除 open-fourthMenu class
      if (thirdMenu) thirdMenu.classList.remove('open-fourthMenu')
      if (liElement) liElement.classList.remove('open-fourthMenu')

      // 延遲後修改 CSS
      setTimeout(() => {
        if (thirdMenu) {
          thirdMenu.style.overflow = ''
          thirdMenu.style.height = `${thirdMenuHeight}px`
        }

        const navMenu = this.closest('.navMenu')
        if (navMenu) {
          navMenu.style.height = `${thirdMenuHeight}px`
          navMenu.style.overflow = 'hidden'
        }
      }, 300) // 模擬 delay 300ms
    })
  })
})
