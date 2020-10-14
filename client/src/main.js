import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import Vue from 'vue';

// Vue.config.devtools = process.env.NODE_ENV === 'development';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
