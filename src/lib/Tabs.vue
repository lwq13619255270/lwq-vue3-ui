<template>
  <div class="lwq-tabs">
    <div class="lwq-tabs-nav">
        <div class="lwq-tabs-nav-item" v-for="(t, index) in titles" :key="index">
            {{ t }}
        </div>
    </div>
    <div class="lwq-tabs-content">
        <component class="lwq-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
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
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lwq-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $blue;
            }
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>