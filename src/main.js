import { createApp } from 'vue'
import App from './App.vue'
import AppWithServer from './AppWithServer'
import router from './router'

createApp(AppWithServer).use(router).mount('#app')
