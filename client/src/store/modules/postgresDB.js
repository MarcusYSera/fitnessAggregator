import api from '../../api/postgresAPI';
// import router from '../../router';

const state = {
  user: null,
  messages: null,
  stravaRefreshToken: null,
  placeholder: null,
};

const getters = {
  user: state => state.user,
  displayMessages: state => state.messages,
  stravaRefreshToken: state => state.stravaRefreshToken,
  placeholder: state => state.placeholder,
};

const actions = {
  createUser: ({ commit }, newUserArr) => {
    console.log(newUserArr);
    commit('setNewUser', newUserArr);
  },
  getMessages: ({ commit }) => {
    api.getMessagesPostgres().then(res => {
      let { messages } = res.data;
      console.log(messages);
      commit('setMessagesMutation', messages);
    });
  },
  sendIdToken: ({ rootState }) => {
    const { id, refreshToken } = rootState.stravaDB;
    api
      .storeIdToken(id, refreshToken)
      .then(res => {
        console.log(res);
        console.log('success from postgresDB/vuex');
      })
      .catch(err => {
        console.log(err);
      });
  },
  getRefreshToken: ({ commit }, id) => {
    api
      .getStravaRefreshToken(id)
      .then(res => {
        console.log(res);
        commit('setPlaceHolder', res);
        // commit('setRefreshToken', res, { root: true });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  },
};

const mutations = {
  setNewUser: (state, newUser) => {
    state.user = newUser;
  },
  setMessagesMutation: (state, messages) => {
    state.messages = messages;
  },
  setPlaceHolder: (state, x) => {
    state.placeholder = x;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
