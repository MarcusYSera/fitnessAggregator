import { createStore } from 'vuex';
import stravaDB from './modules/stravaDB';
import postgresDB from './modules/postgresDB';

export default createStore({ modules: { stravaDB, postgresDB } });
