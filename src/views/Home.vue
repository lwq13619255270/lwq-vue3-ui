<template>
  <div class="home">
    <Topnav/>
    <div class="banner">
      <h1>又又UI</h1>
      <h2>一个基于vue3+vite+typescript开发的一个UI框架</h2>
      <p class="actions">
        <a href="https://github.com/lwq13619255270/lwq-vue3-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
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
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:lightgreen;
    > .actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height:$h;
        line-height: $h;
        border-radius: calc($h / 2);
        padding: 0 8px;
      }
    }

  }
</style>