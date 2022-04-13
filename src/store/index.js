import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      status: '',
    },
    token: localStorage.getItem('token') || '',
    errorAlert: {
      show: false,
      message: '',
    },
    successAlert: {
      show: false,
      message: '',
    },
  },
  mutations: {
    start_loading(state, payload) {
      let block = state[payload];
      block.status = 'loading';
    },
    finish_loading(state, payload) {
      let block = state[payload];
      block.status = '';
    },
    auth_success(state, token) {
      state.auth.status = 'success';
      state.token = token;
    },
    throw_error(state, payload) {
      let block = state[payload];
      block.status = 'error';
    },
    hide_success_alert(state) {
      state.successAlert.show = false;
      state.successAlert.message = '';
    },
    hide_error_alert(state) {
      state.errorAlert.show = false;
      state.errorAlert.message = '';
    },
    show_success_alert(state, payload) {
      state.successAlert.show = true;
      state.successAlert.message = payload;
    },
    show_error_alert(state, payload) {
      state.errorAlert.show = true;
      state.errorAlert.message = payload;
    },
  },
  actions: {
    async login({ commit }) {
      commit('start_loading', 'auth');
      const secret = process.env.VUE_APP_SECRET;
      const basic = Buffer.from(`11d7c9f` + ':' + secret).toString('base64');
      try {
        let resp = await axios({
          method: 'post',
          url: '/auth/login',
          data: {
            username: 'intern',
            password: 'intern-S!',
          },
          headers: {
            Authorization: `Basic ${basic}`,
          },
        });

        const token = resp.data.access_token;
        const refreshToken = resp.data.refresh_token;
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refreshToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('auth_success', token);
      } catch (error) {
        console.log(error);
        commit('throw_error', 'auth');
        localStorage.removeItem('token');
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.auth.status,
  },
  modules: {},
});
