const router = require('express').Router();
const requests = require('./requests.js');

// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// http GET request for `/about`
router.get(`/:restaurant_id/about`, requests.about.get);

//http GET request for  `/location`
router.get(`/:restaurant_id/location`, requests.location.get);

module.exports = router;