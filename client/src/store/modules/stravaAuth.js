import api from '../../api/stravaAPI';
import router from '../../router';

const state = {
  token: window.localStorage.getItem('strava_token'),
  id: window.localStorage.getItem('strava_id'),
  firstName: window.localStorage.getItem('strava_firstName'),
  // activities: null,
  activities: JSON.parse(window.localStorage.getItem('strava_user_activities')),
  // activities: null,
  activitiesList: JSON.parse(
    window.localStorage.getItem('strava_user_list_activities')
  ),
};

const getters = {
  isLoggedIn: state => !!state.token,
  firstName: state => state.firstName,
  tokenValue: state => state.token,
  idValue: state => state.id,
  athleteActivities: state => state.activities,
  activitiesList: state => state.activitiesList,
};

const actions = {
  login: () => {
    api.login();
  },
  createToken: ({ commit }, code) => {
    // console.log(`createToken function within store: ${code}`);
    api.retrieveToken(code).then(res => {
      console.log(res);
      let now = Date.now();
      console.log(now);
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
  // this is actually hitting the get athelete stats request
  getAthleteStats: async ({ commit }, arr) => {
    await api
      .getAthleteStats(arr[0], arr[1])
      .then(res => {
        // console.log(res);
        let activities = {
          rides: res.data.all_ride_totals.count,
          runs: res.data.all_run_totals.count,
          swims: res.data.all_swim_totals.count,
        };
        // console.log(activities);
        commit('setActivities', activities);
        window.localStorage.setItem(
          'strava_user_activities',
          JSON.stringify(activities)
        );
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  },
  getListOfAthleteActivities: ({ commit }, token) => {
    api.getAthleteActivitiesList(token).then(res => {
      // console.log(res.data);
      commit('setActivitiesList', res.data);
      window.localStorage.setItem(
        'strava_user_list_activities',
        JSON.stringify(res.data)
      );
    });
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    // window.localStorage.removeItem('strava_token');
    window.localStorage.clear();
    router.push('/');
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
  // parseActivities: (state, activities) => {
  //   state.activities = JSON.parse(activities);
  // },
  setActivitiesList: (state, activitiesList) => {
    state.activitiesList = activitiesList;
  },
  // parseActivitiesList: (state, activitiesList) => {
  //   state.activitiesList = JSON.parse(activitiesList);
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
