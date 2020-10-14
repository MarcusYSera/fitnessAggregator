// import qs from 'qs';
import axios from 'axios';

const POSTGRES_SERVER = 'http://localhost:3000/v1';

export default {
  async getMessagesPostgres() {
    let res = await axios
      .get(`${POSTGRES_SERVER}/messages`)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
    return res;
  },
  async storeIdToken(id, token) {
    let res = await axios
      .post(`${POSTGRES_SERVER}/users`, {
        stravaId: `${id}`,
        refreshToken: `${token}`,
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
    return res;
  },
  async getStravaRefreshToken() {
    let res = await axios
      .get(`${POSTGRES_SERVER}/users`)
      .then(res => {
        console.log('res from getStravaRefreshTokenroute');
        console.log(res);
        return res;
      })
      .catch(err => {
        return err;
      });
    return res;
  },
};
