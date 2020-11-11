import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home';
import Strava from '../components/strava/Strava';
import StravaCodeHandler from '../components/strava/StravaCodeHandler';
import GoogleCodeHandler from '../components/google/GoogleCodeHandler';
import SignIn from '../components/SignIn';

const routes = [
  { path: '/', component: Home },
  { path: '/strava', component: Strava },
  { path: '/oauth/callback', component: StravaCodeHandler },
  { path: '/oauth/googleCallback', component: GoogleCodeHandler },
  { path: '/signin', component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
