import axios from 'axios';

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
};

const mutations = {
  start_loading(state, payload) {
    const block = state[payload];
    block.status = 'loading';
  },
  finish_loading(state, payload) {
    const block = state[payload];
    block.status = '';
  },
  auth_success(state, token) {
    state.auth.status = 'success';
    state.token = token;
  },
  throw_error(state, payload) {
    const block = state[payload];
    block.status = 'error';
  },
};

const actions = {
  async login({ commit }) {
    commit('start_loading', 'auth');
    const secret = process.env.VUE_APP_SECRET;
    const basic = Buffer.from(`11d7c9f` + ':' + secret).toString('base64');
    try {
      const resp = await axios({
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
      commit('throw_error', 'auth');
      localStorage.removeItem('token');
    }
  },
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.auth.status,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
