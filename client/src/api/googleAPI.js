import { gapiPromise } from './gapi';

export default {
  loadGapi() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi) {
        return 'failed auth';
      }
      if (!gapi.auth) {
        console.log(process.env.VUE_APP_GOOGLE_CLIENT_ID);
        gapi.load('client:auth2', () => {
          gapi.client
            .init({
              // apiKey: `${process.env.VUE_APP_GOOGLE_API_KEY}`,
              clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
              scope: 'https://www.googleapis.com/auth/fitness.activity.read',
            })
            .then(() => {
              let GoogleAuth = gapi.auth2.getAuthInstance();
              console.log(GoogleAuth.isSignedIn.get());
            });
          console.log(
            'gapi loaded, but not authorized yet, set up auth process'
          );
          return 'success';
        });
      }
    });
  },
};
