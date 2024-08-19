// import { createApp } from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// import App from './App.vue'
// import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import 'bootstrap'
// import '@popperjs/core/dist/umd/popper.min.js'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'




// createApp(App)
// .use (router)
// .mount('#app')
// Vue.use(BootstrapVue)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVue styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import BootstrapVue
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

// Use the router
app.use(router)

// Use BootstrapVue
app.use(BootstrapVue3)

// Mount the app
app.mount('#app')

