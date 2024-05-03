<template>
  <div class="switch">
    <Switch :value="checked" @input=" checked = $event"></Switch>
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