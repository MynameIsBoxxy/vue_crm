import Vue from 'vue'

//import useVuelidate from '@vuelidate/core'
//import VueCompositionAPI from '@vue/composition-api'

import Vuelidate from 'vuelidate'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import Loader from '@/components/app/Loader'
import tooltipDirective from '@/directives/tooltip.directive'

import Paginate from 'vuejs-paginate'
import farebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
//Vue.use(VueCompositionAPI)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)

Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
farebase.initializeApp ({
  apiKey: "AIzaSyBbljbjNGpVxasmSFvJhbyJ6mR-s89ECFU",
  authDomain: "vue-crm-211c1.firebaseapp.com",
  databaseURL: "https://vue-crm-211c1.firebaseio.com",
  projectId: "vue-crm-211c1",
  storageBucket: "vue-crm-211c1.appspot.com",
  messagingSenderId: "612635047660",
  appId: "1:612635047660:web:2877d7c901bfb48b2d57c9"
});

let app 

farebase.auth().onAuthStateChanged(()=>{
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
  
})
