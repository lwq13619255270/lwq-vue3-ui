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
     <Dialog></Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';

export default {
  name: 'DialogDemo',
  components: {
    Dialog
  }
}
</script>