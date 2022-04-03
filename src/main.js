import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

import DefaultLayout from './components/layout/DefaultLayout.vue';
import AuthLayout from './components/layout/AuthLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('auth-layout', AuthLayout);

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import EasySlider from 'vue-easy-slider';
Vue.use(EasySlider);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

axios.defaults.baseURL = `https://api-factory.simbirsoft1.com/api`;
axios.defaults.headers.common['X-Api-Factory-Application-Id'] =
  process.env.VUE_APP_APPLICATION_ID;

import YmapPlugin from 'vue-yandex-maps';
const ySettings = {
  apiKey: process.env.VUE_APP_YMAPS_APIKEY,
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
};
Vue.use(YmapPlugin, ySettings);

import ImageFallBack from './imagefallback';
Vue.directive('image-fall-back', ImageFallBack);

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
