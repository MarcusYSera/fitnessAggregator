import axios from 'axios';
import qs from 'qs';

const ROOT_URL = 'https://www.strava.com';
const CLIENT_ID = 54277;
const REDIRECT_URI = 'http://localhost:8080/';

export default {
  // google sign in will not work on mobile webview
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: 'code',
      // approval_prompt: 'auto',
      scope: 'read',
    };
    window.location = `${ROOT_URL}/oauth/authorize?${qs.stringify(
      querystring
    )}`;
  },
};
