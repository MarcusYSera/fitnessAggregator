// import axios from 'axios';
import qs from 'qs';
import axios from 'axios';

const EXTERNAL_API_URL = 'https://www.strava.com';
// const ROOT_URL = 'http://localhost:8080';
const PROXY_SERVER_URL = 'http://localhost:8000';
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
    window.location = `${EXTERNAL_API_URL}/oauth/authorize?${qs.stringify(
      querystring
    )}`;
  },
  retrieveToken(code) {
    return axios.post(
      `${EXTERNAL_API_URL}/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`
    );
  },
  async getAthleteStats(token, id) {
    let response = await axios
      .get(`${PROXY_SERVER_URL}/strava/athlete/stats/${id}/${token}`)
      .then(res => {
        // console.log('success');
        return res;
      })
      .catch(err => {
        // console.log('error');
        return err;
      });
    return response;
  },
  async getAthleteActivitiesList(token) {
    let response = await axios
      .get(`${PROXY_SERVER_URL}/strava/athlete/activities/${token}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
    return response;
  },
};
