import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import AuthLayout from './components/layout/AuthLayout.vue';
import AdminLayout from './components/layout/admin/AdminLayout.vue';

Vue.component('auth-layout', AuthLayout);
Vue.component('admin-layout', AdminLayout);

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

axios.defaults.baseURL = `https://api-factory.simbirsoft1.com/api`;
axios.defaults.headers.common['X-Api-Factory-Application-Id'] =
  process.env.VUE_APP_APPLICATION_ID;

let token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

import ImageFallBack from './directives/imagefallback';
Vue.directive('image-fall-back', ImageFallBack);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
