<template>
  <div>
    <headerStyle02></headerStyle02>
    <div class="header-fullMenu-mask"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderStyle02 from './components/layout/header/HeaderStyle02.vue'

export default {
  components: {
    HeaderStyle02
  }
}
</script>
