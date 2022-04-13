import axios from 'axios';

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  refreshToken: localStorage.getItem('refresh_token') || '',
};

const mutations = {
  start_loading(state) {
    state.status = 'loading';
  },
  auth_success(state, token) {
    state.status = 'success';
    state.token = token;
  },
  throw_error(state) {
    state.status = 'error';
  },
  logout(state) {
    state.status = '';
    state.token = '';
    state.refreshToken = '';
  },
};

const actions = {
  login({ commit }, payload) {
    let { username, password } = payload;
    commit('start_loading');
    commit('alerts/hide_error_alert', '', { root: true });
    const secret = process.env.VUE_APP_SECRET;
    const basic = Buffer.from(`11d7c9f` + ':' + secret).toString('base64');

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/auth/login',
        data: {
          username: username,
          password: password,
        },
        headers: {
          Authorization: `Basic ${basic}`,
        },
      })
        .then((resp) => {
          const token = resp.data.access_token;
          const refreshToken = resp.data.refresh_token;

          localStorage.setItem('token', token);
          localStorage.setItem('refresh_token', refreshToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          commit('auth_success', token);
          resolve();
        })
        .catch((err) => {
          commit('throw_error');

          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');

          commit(
            'alerts/show_error_alert',
            err.message == 'Request failed with status code 401'
              ? 'Пользователь не найден.'
              : err.message,
            { root: true }
          );
          reject();
        });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/auth/logout',
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((resp) => {
          let logoutSuccess = resp.status == 204;
          if (logoutSuccess) {
            commit('logout');

            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');

            delete axios.defaults.headers.common['Authorization'];
            resolve();
          } else {
            commit('throw_error');
            commit(
              'alerts/show_error_alert',
              'Что-то пошло не так. Перезагрузите страницу.',
              { root: true }
            );
            reject();
          }
        })
        .catch((err) => {
          commit('throw_error');
          commit('alerts/show_error_alert', err.message, { root: true });
          reject();
        });
    });
  },
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
