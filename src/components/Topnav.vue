<template>
  <div class="top-nav">
    <div class="log">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span @click="toggleAside" class="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  name: 'Tapnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    }
    return {
      toggleAside
    }
  }
}
</script>
<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10 ;
  justify-content: space-between;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media(max-width: 500px) {
    justify-content: center;
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>