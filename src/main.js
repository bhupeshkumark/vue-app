import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@popperjs/core/dist/umd/popper.min.js'



createApp(App)
.use (router)
.mount('#app')
// .use(bootstrap)