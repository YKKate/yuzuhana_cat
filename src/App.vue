<template>
  <app-header/>
  <router-view/>
  <app-footer/>
</template>

<script>
import appHeader from '@/components/AppHeader.vue'
import appFooter from '@/components/AppFooter.vue'
export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
