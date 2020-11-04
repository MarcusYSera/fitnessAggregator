import api from '../../api/googleAPI';
// import router from '../../router';

const state = {
  gauth: false,
};

const getters = {
  googleSignedIn: state => state.gauth,
};

const actions = {
  getGSignedIn: ({ commit }) => {
    api.loadGapi();
    commit('setGoogleSignedIn', true);
  },
};

const mutations = {
  setGoogleSignedIn: (state, x) => {
    state.gauth = x;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
