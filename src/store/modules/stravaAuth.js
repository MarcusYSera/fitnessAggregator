import api from '../../api/stravaAPI';
import router from '../../router';

const state = {
  token: window.localStorage.getItem('strava_token'),
  id: window.localStorage.getItem('strava_id'),
  firstName: window.localStorage.getItem('strava_firstName'),
  activities: null,
};

const getters = {
  isLoggedIn: state => !!state.token,
  firstName: state => state.firstName,
  tokenValue: state => state.token,
  idValue: state => state.id,
};

const actions = {
  login: () => {
    api.login();
  },
  createToken: ({ commit }, code) => {
    // console.log(`createToken function within store: ${code}`);
    api.retrieveToken(code).then(res => {
      let { athlete } = res.data;
      let { access_token } = res.data;
      commit('setId', res.data.athlete.id);
      commit('setToken', access_token);
      commit('setFirstName', athlete.firstname);
      window.localStorage.setItem('strava_token', access_token);
      window.localStorage.setItem('strava_id', athlete.id);
      window.localStorage.setItem('strava_firstName', athlete.firstname);
      router.push('/strava');
    });
  },
  getAthleteActivities: ({ commit }, arr) => {
    console.log(arr);
    api
      .getActivities(arr[0], arr[1])
      .then(res => {
        console.log(res);
        commit('setActivities', res);
      })
      .catch(err => {
        console.log(`error: ${err}`);
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
  setId: (state, id) => {
    state.id = id;
  },
  setFirstName: (state, firstName) => {
    state.firstName = firstName;
  },
  setActivities: (state, activities) => {
    state.activities = activities;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
