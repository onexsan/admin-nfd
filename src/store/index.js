import Vue from 'vue';
import Vuex from 'vuex';

import alerts from './modules/alerts';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    alerts,
    auth,
  },
});
