import api from '../../api/googleAPI';
// import router from '../../router';

const state = {
  gauth: null,
};

const getters = {
  googleSignedIn: state => state.gauth,
};

const actions = {
  getGSignedIn: ({ commit }) => {
    api.loadGapi();
    commit('setGoogleSignedIn', 'hello');
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
