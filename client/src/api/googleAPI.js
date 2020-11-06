import { gapiPromise } from './gapi';

export default {
  async loadGapi() {
    // let response = gapiPromise.then(async () => {
    gapiPromise.then(async () => {
      const gapi = window.gapi;
      if (!gapi.auth) {
        gapi.load('client:auth2', async () => {
          await gapi.client.init({
            // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
            clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
            scope: 'https://www.googleapis.com/auth/fitness.activity.read',
          });
          // console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // return gapi.auth2.getAuthInstance().isSignedIn.get();
        });
      } else {
        console.log('gapi already initiated');
      }
    });
    // return await response;
    // return 'hello';
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
