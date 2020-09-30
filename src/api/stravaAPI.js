// import axios from 'axios';
import qs from 'qs';
import axios from 'axios';

const ROOT_URL = 'https://www.strava.com';
const CLIENT_ID = 54277;
const CLIENT_SECRET = 'dab2d5dd277bde07916615b0c20ea8740dafc580';
const REDIRECT_URI = 'http://localhost:8080/oauth/callback';

export default {
  // google sign in will not work on mobile webview
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: 'code',
      approval_prompt: 'auto',
      scope: 'activity:read_all',
    };
    window.location = `${ROOT_URL}/oauth/authorize?${qs.stringify(
      querystring
    )}`;
  },
  retrieveToken(code) {
    return axios.post(
      `${ROOT_URL}/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`
    );
  },
};
