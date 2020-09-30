import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home';
import Strava from '../components/Strava';
import StravaCodeHandler from '../components/StravaCodeHandler';

const routes = [
  { path: '/', component: Home },
  { path: '/strava', component: Strava },
  { path: '/oauth/callback', component: StravaCodeHandler },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
