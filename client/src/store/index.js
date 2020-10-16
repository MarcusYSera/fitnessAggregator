import { createStore } from 'vuex';
import stravaDB from './modules/stravaDB';
import postgresDB from './modules/postgresDB';
import googleDB from './modules/googleDB';

export default createStore({ modules: { stravaDB, postgresDB, googleDB } });
