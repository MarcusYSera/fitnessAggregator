import { gapiPromise } from './gapi';

export default {
  loadGapi() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi.auth) {
        gapi.load('client:auth2', () => {
          gapi.client.init({
            // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
            clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
            scope: 'https://www.googleapis.com/auth/fitness.activity.read',
          });
          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      }
    });
  },
  signedIn() {
    const gapi = window.gapi;
    let gAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
    if (!gAuth) {
      gapi.auth2.getAuthInstance().signIn();
    }
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  },
  signOut() {
    const gapi = window.gapi;
    let gAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
    if (gAuth) {
      gapi.auth2.getAuthInstance().signOut();
    }
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  },
};
