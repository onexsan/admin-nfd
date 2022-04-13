const state = {
  errorAlert: {
    show: false,
    message: '',
  },
  successAlert: {
    show: false,
    message: '',
  },
};

const mutations = {
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
};

const actions = {};

const getters = {
  getErrorAlert: (state) => state.errorAlert,
  getSuccessAlert: (state) => state.successAlert,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
