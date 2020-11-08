import api from '../../api/googleAPI';
// import router from '../../router';

const state = {
  gauth: window.localStorage.getItem('googleSignIn'),
};

const getters = {
  googleSignedIn: state => state.gauth,
};

const actions = {
  loadGapi: async ({ commit }) => {
    await api.loadGapi();
    console.log('gapi');
    const status = window.gapi.auth2.getAuthInstance().isSignedIn.get();
    commit('setGoogleSignedIn', status);
    window.localStorage.setItem('googleSignIn', status);
  },
  googleSignIn: async ({ commit }) => {
    await api.signedIn();
    if (window.gapi.auth2.getAuthInstance().isSignedIn.get() === true) {
      commit('setGoogleSignedIn', true);
      window.localStorage.setItem('googleSignIn', true);
    }
  },
  googleSignOut: ({ commit }) => {
    api.signOut();
    commit('setGoogleSignedIn', false);
    window.localStorage.setItem('googleSignIn', false);
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
