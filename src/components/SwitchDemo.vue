<template>
  <div class="switch">
    <!-- <Switch :value="checked" @update:value=" checked = $event"></Switch> -->
    <!-- 使用v-model -->
    <Switch v-model:value="checked"></Switch>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
export default {
  name: 'SwitchDemo',
  components: {
    Switch
  },
  setup() {
    const checked = ref(false);
    return {
      checked
    }
  }
}
</script>