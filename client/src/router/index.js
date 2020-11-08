import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home';
import Strava from '../components/Strava';
import StravaCodeHandler from '../components/StravaCodeHandler';
import GoogleCodeHandler from '../components/GoogleCodeHandler';

const routes = [
  { path: '/', component: Home },
  { path: '/strava', component: Strava },
  { path: '/oauth/callback', component: StravaCodeHandler },
  { path: '/oauth/googleCallback', component: GoogleCodeHandler },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
