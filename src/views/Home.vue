<template>
  <div class="home">
    <Topnav/>
    <div class="banner">
      <h1>又又UI</h1>
      <h2>一个基于vue3+vite+typescript开发的一个UI框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>
<script>
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>
<style lang="scss" scoped>
</style>