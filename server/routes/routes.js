const StravaControllers = require("../controllers/strava_controllers");

module.exports = (app) => {
  app.get("/strava/activities/:id/:token", StravaControllers.findActivities);
};
