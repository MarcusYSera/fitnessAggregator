import api from '../../api/googleAPI';
// import router from '../../router';

const state = {
  gauth: false,
};

const getters = {
  googleSignedIn: state => state.gauth,
};

const actions = {
  loadGapi: () => {
    api.loadGapi();
  },
  isSignedIn: ({ commit }) => {
    commit('setGoogleSignIn', api.isSignedIn());
  },
  googleSignIn: () => {
    api.signedIn();
  },
  googleSignOut: () => {
    api.signOut();
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
