import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  // createApp(Dialog).mount(div); // 无法给组件中传入参数

  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render () {
      return h(Dialog, {
        visible: true,
        "onUpdate:visible": (newVisible) => {
          if(newVisible === false) {
            close();
          }
        },
        ok,
        cancel,
      },
      {
        //插槽
        title,
        content,
      });
    }
  });
  app.mount(div)
}