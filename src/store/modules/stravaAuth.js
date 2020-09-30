import api from '../../api/stravaAPI';

const state = {
  token: null,
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
