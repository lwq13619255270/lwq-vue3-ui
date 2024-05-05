<template>
  <div>
    <!-- 
      需求
      1、可以有不同的等级（主要按钮 次要按钮）
      2、可以是链接，可以是文字
      3、可以click、focus、鼠标悬浮
      4、大小size： 大中小
      5、可以禁用： disabled
      6、可以加载中： loading
     -->
    <h1>按钮的主题</h1>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    Button
  }
}
</script>