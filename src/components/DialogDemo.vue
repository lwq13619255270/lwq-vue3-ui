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
    <Dialog v-model:visible="visible" :ok="ok">
      <template v-slot:title>
        <h1>标题</h1>
      </template>
      <template v-slot:content>
        <div>文本1</div>
        <div>文本2</div>
      </template>
    </Dialog>

    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import { openDialog } from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    }
    const ok = () => {
      return false
    }
    const showDialog = () => {
      openDialog({
        title: '提示',
        content: '内容',
        ok() {
            console.log('ok')
        },
        cancel() {
            console.log('cancel')
        }
      })
    }
    return  {
      visible,
      toggle,
      ok,
      showDialog
    }
  }
}
</script>