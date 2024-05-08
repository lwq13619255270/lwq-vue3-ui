<template>
  <div>
    <!-- 
      需求
      1、点击后弹出
      2、有遮罩层overlay
      3、有close按钮
      4、有标题
      5、有内容
      6、有yes/no 按钮
     -->
     <h1>示例1</h1>
     <Button @click="toggle">toggle</Button>
     <Dialog :visible="visible"></Dialog>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

export default {
  name: 'DialogDemo',
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value
    }
    return  {
      visible,
      toggle
    }
  }
}
</script>