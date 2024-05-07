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
    <h2>按钮的主题</h2>
    <div>
      <Button>默认按钮</Button>
      <Button theme="button">默认按钮</Button>
      <Button theme="link">Link 按钮</Button>
      <Button theme="text">文本按钮</Button>
    </div>
    <h2>大小按钮</h2>
    <div>
      <Button>Normal Button</Button>
      <Button size="normal">Normal Button</Button>
      <Button size="big">Big Button</Button>
      <Button size="small">Small Button</Button>
    </div>
    <div>
      <Button size="big" theme="link">Big Button</Button>
      <Button theme="link">Normal Button</Button>
      <Button size="small" theme="link">Small Button</Button>
    </div>
    <div>
      <Button size="big" theme="text">Big Button</Button>
      <Button theme="text">Normal Button</Button>
      <Button size="small" theme="text">Small Button</Button>
    </div>
    <h2>按钮等级</h2>
    <div>
      <dir>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </dir>
      <dir>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
      </dir>
      <dir>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
      </dir>
    </div>
    <h2>disabled</h2>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
  </div>
  <h2>loading</h2>
  <div>
    <Button loading>Loading</Button>
    <Button>Done</Button>
</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
};
</script>