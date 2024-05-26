<template>
  <div class="lwq-tabs">
    <div class="lwq-tabs-nav">
      <div
        class="lwq-tabs-nav-item"
        :class="{ selected: t === value }"
        @click="select(t)"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="lwq-tabs-nav-indicator"></div>
    </div>
    <div class="lwq-tabs-content">
      <component
        class="lwq-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";

export default {
  props: {
    value: {
      type: String,
    },
  },
  setup(props, ctx) {
    console.log(ctx);
    const defaults = ctx.slots.default?.();
    defaults?.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
      console.log(tab);
      // titles.push(tab.props?.title)
    });
    const titles = defaults?.map((tab) => {
      return tab.props?.title;
    });
    const select = (title: string) => {
      ctx.emit("update:value", title);
    };
    const current = computed(() => {
      return defaults?.find((tab) => tab.props?.title === props.value);
    });
    return {
      defaults,
      titles,
      current,
      select,
    };
  },
};
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>