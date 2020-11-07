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
    console.log('gapi');
  },
  loadStatus: () => {
    console.log('load status');
    api.checkStatus();
    // commit('setGoogleSignedIn', await status);
  },
  googleSignIn: async ({ commit }) => {
    let response = api.signedIn();
    console.log(await response);
    commit('setGoogleSignedIn', await response);
    window.localStorage.setItem('googleSignIn', await response);
  },
  googleSignOut: async ({ commit }) => {
    let response = api.signOut();
    console.log(await response);
    commit('setGoogleSignedIn', await response);
    window.localStorage.setItem('googleSignIn', await response);
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
