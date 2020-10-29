import { gapiPromise } from './gapi';

export default {
  loadGapi() {
    gapiPromise.then(() => {
      const gapi = window.gapi;
      if (!gapi) {
        return 'failed auth';
      }
      if (!gapi.auth) {
        console.log('gapi loaded, but not authorized yet, set up auth process');
        return 'success';
      }
    });
  },
};
