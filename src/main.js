/* eslint-disable */
import { createApp } from 'vue'
import {createPinia} from 'pinia'


import App from './App.vue'
const app=createApp(App)
app.use(createPinia())

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

// createApp(App)

// const pinia= createPinia()

app.component('fa', FontAwesomeIcon)
import router from './router'
app.use(router)

app.mount('#app')