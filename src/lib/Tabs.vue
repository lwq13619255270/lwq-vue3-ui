<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(tab, index) in defaults" :key="index" :is="tab"></component>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue';

export default {
  setup(props, ctx) {
    console.log(ctx)
    const defaults = ctx.slots.default?.();
    const titles: string[] = [];
    defaults?.forEach(tab => {
      if (tab.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      } 
      console.log(tab)
      titles.push(tab.props?.title)
    })
    return {
      defaults,
      titles
    }
  }
}
</script>