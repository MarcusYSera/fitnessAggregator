import { gapiPromise } from './gapi';

// let GoogleAuth;

export default {
  async loadGapi() {
    await gapiPromise;
    const gapi = window.gapi;
    await new Promise((res, rej) => {
      gapi.load('client:auth2', { callback: res, onerror: rej });
    });
    await gapi.client.init({
      apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
      clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
      scope: 'https://www.googleapis.com/auth/fitness.activity.read',
    });
    console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
  },
  checkStatus() {
    const gapi = window.gapi;
    console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
  },
  signedIn() {
    const gapi = window.gapi;
    gapi.auth2.getAuthInstance().signIn();
    return true;
  },
  signOut() {
    const gapi = window.gapi;
    gapi.auth2.getAuthInstance().signOut();
    return false;
  },
};
