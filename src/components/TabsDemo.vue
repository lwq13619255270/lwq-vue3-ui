<template>
  <div>
    tabs 组件
    <h1>示例1</h1>
    <Tabs v-model:value="name">
      <Tab title="导航1">tab1</Tab>
      <Tab title="导航2">tab2</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
export default {
  name: 'TabsDemo',
  components: {
    Tabs,
    Tab
  },
  setup(){
    const name = ref('导航1');
    return  {
      name
    }
  }
}
</script>