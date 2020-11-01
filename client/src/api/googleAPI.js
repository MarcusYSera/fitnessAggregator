import { gapiPromise } from './gapi';

export default {
  loadGapi() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi) {
        return 'failed auth';
      }
      if (!gapi.auth) {
        gapi.client
          .init({
            apiKey: 'AIzaSyArIlQZWnUYfbZ-MDyKYi88wXobgcMawu8',
            clientId:
              '701476865706-ebqg4cvt0d09pb6egr4b56054s1i2kbk.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/fitness.activity.read',
          })
          .then(function() {
            let GoogleAuth = gapi.auth2.getAuthInstance();
            console.log(GoogleAuth);
            // Listen for sign-in state changes.
            // GoogleAuth.isSignedIn.listen(updateSigninStatus);
          });
        console.log('gapi loaded, but not authorized yet, set up auth process');
        return 'success';
      }
    });
  },
};
