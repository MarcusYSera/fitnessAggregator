const axios = require("axios");
const ROOT_URL = "https://www.strava.com/api/v3";
const CLIENT_ID = 54277;
const CLIENT_SECRET = "dab2d5dd277bde07916615b0c20ea8740dafc580";
const REDIRECT_URI = "http://localhost:8080/oauth/callback";

module.exports = {
  findAthleteStats(req, res, next) {
    const { token } = req.params;
    const { id } = req.params;
    // console.log(token);
    // console.log(id);
    axios
      .get(`${ROOT_URL}/athletes/${id}/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((answer) => {
        console.log(answer.data);
        res.send(answer.data);
      })
      .catch(next);
  },
  findAthleteActivitiesList(req, res, next) {
    const { token } = req.params;
    // console.log(token);
    axios
      .get(`${ROOT_URL}/athlete/activities`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((answer) => {
        console.log(answer);
        res.send(answer.data);
      })
      .catch(next);
  },
};
