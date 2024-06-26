import './lib/lwq.scss'
import './index.scss'
import { router } from './router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
