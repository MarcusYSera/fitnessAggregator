const StravaControllers = require("../controllers/strava_controllers");

module.exports = (app) => {
  app.get(
    "/strava/athlete/stats/:id/:token",
    StravaControllers.findAthleteStats
  );
  app.get(
    "/strava/athlete/activities/:token",
    StravaControllers.findAthleteActivitiesList
  );
};
