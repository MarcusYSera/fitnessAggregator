import { createStore } from 'vuex';
import stravaAuth from './modules/stravaAuth';

export default createStore({ modules: { stravaAuth } });
