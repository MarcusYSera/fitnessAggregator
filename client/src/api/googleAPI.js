import { gapiPromise } from './gapi';

export default {
  async loadGapi() {
    // let response = gapiPromise.then(async () => {
    gapiPromise.then(async () => {
      const gapi = window.gapi;
      if (!gapi.auth) {
        let responseTwo = gapi.load('client:auth2', async () => {
          await gapi.client.init({
            // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
            clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
            scope: 'https://www.googleapis.com/auth/fitness.activity.read',
          });
          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          return gapi.auth2.getAuthInstance().isSignedIn.get();
        });
        return await responseTwo;
      }
    });
    // return await response;
    return 'hello';
  },
  async signedIn() {
    const gapi = window.gapi;
    await gapi.auth2.getAuthInstance().signIn();
    return true;
  },
  async signOut() {
    const gapi = window.gapi;
    await gapi.auth2.getAuthInstance().signOut();
    return false;
  },
};
