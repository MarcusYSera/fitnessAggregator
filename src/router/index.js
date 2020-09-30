import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home';
import Strava from '../components/Strava';

const routes = [
  { path: '/', component: Home },
  { path: '/strava', component: Strava },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
