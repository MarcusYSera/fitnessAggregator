import { gapiPromise } from './gapi';

export default {
  loadGapi() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi) {
        return 'failed auth';
      }
      if (!gapi.auth) {
        gapi.load('client:auth2', () => {
          gapi.client.init({
            // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
            clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
            scope: 'https://www.googleapis.com/auth/fitness.activity.read',
          });
          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // .then(
          //   () => {
          //     let googleAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
          //     console.log(googleAuth);
          //     if (!googleAuth) {
          //       gapi.auth2.getAuthInstance().signIn();
          //     } else {
          //       gapi.auth2.getAuthInstance().signOut();
          //       // return googleAuth;
          //     }
          //   },
          //   err => {
          //     console.log(err);
          //     return err;
          //   }
          // );
          // console.log(
          //   'gapi loaded, but not authorized yet, set up auth process'
          // );
          // return 'success';
        });
      }
      return 'hello';
    });
  },
};
