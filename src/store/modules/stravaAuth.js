import api from '../../api/stravaAPI';
import router from '../../router';

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
  createToken: ({ commit }, code) => {
    console.log(`createToken function within store: ${code}`);
    commit('setCode', code);
    api.retrieveToken(code).then(res => {
      commit('setToken', res.data.access_token);
      window.localStorage.setItem('strava_token', res.data.access_token);
      router.push('/strava');
    });
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('strava_token');
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
