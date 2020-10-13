import api from '../../api/postgresAPI';
// import router from '../../router';

const state = {
  messages: null,
};

const getters = {
  displayMessages: state => state.messages,
};

const actions = {
  getMessages: ({ commit }) => {
    api.getMessagesPostgres().then(res => {
      let { messages } = res.data;
      console.log(messages);
      commit('setMessagesMutation', messages);
    });
  },
  sendIdToken: () => {
    api
      .storeIdToken()
      .then(res => {
        console.log(res);
        console.log('success from postgresDB/vuex');
      })
      .catch(err => {
        console.log(err);
      });
  },
};

const mutations = {
  setMessagesMutation: (state, messages) => {
    state.messages = messages;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};