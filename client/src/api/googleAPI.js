import { gapiPromise } from './gapi';

// let GoogleAuth;

export default {
  async loadGapi() {
    await gapiPromise;
    const gapi = window.gapi;
    gapi.load('client:auth2').then(() => {
      gapi.client.init({
        clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
        scope: 'https://www.googleapis.com/auth/fitness.activity.read',
      });
    });
    // await gapi.load('client:auth2', async () => {
    //   await gapi.client.init({
    //     // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
    //     clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
    //     scope: 'https://www.googleapis.com/auth/fitness.activity.read',
    //   });
    //   // console.log('gapi initialized');
    //   console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
    //   //   return;
    // });

    // await gapi.load('client:auth2');
    // console.log('load finished');
    // await gapi.client.init({
    //   // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
    //   clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
    //   scope: 'https://www.googleapis.com/auth/fitness.activity.read',
    // });
    console.log('success');
    // console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
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
