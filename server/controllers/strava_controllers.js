const axios = require("axios");
const ROOT_URL = "https://www.strava.com";
const CLIENT_ID = 54277;
const CLIENT_SECRET = "dab2d5dd277bde07916615b0c20ea8740dafc580";
const REDIRECT_URI = "http://localhost:8080/oauth/callback";

module.exports = {
  findActivities(req, res, next) {
    const { token } = req.params;
    const { id } = req.params;
    console.log(token);
    console.log(id);
    // const params = {
    //   include_all_efforts: true,
    // };
    axios
      .get(`${ROOT_URL}/api/v3/athletes/${id}/stats`, {
        // params,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((answer) => {
        console.log(answer.data);
        res.send(answer.data);
      })
      .catch(next);
    // return res.data;
  },
};
