import api from '../../api/googleAPI';
// import router from '../../router';

const state = {
  gauth: window.localStorage.getItem('googleSignIn'),
};

const getters = {
  googleSignedIn: state => state.gauth,
};

const actions = {
  loadGapi: () => {
    api.loadGapi();
  },
  googleSignIn: async ({ commit }) => {
    let response = await api.signedIn();
    commit('setGoogleSignedIn', response);
    window.localStorage.setItem('googleSignIn', response);
  },
  googleSignOut: async ({ commit }) => {
    let response = await api.signOut();
    commit('setGoogleSignedIn', response);
    window.localStorage.setItem('googleSignIn', response);
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
