// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Initialize (less) styling.
import '~/assets/style/core.less'

// Initialize Components & plugins.
import VFire from 'vuefire'
import Moment from 'vue-moment'
import Icon from '~/components/helpers/icon'
import Mockups from '~/components/helpers/Mockups'
const components = {
  Icon,
  Mockups
}

// Installation components.
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

// Initialize Firebase
Vue.use(VFire)
Vue.use(Moment)
Vue.prototype.PORT = 'https://firebasestorage.googleapis.com/v0/b/touch-d0c06.appspot.com/o/'

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})