// Import Dependencies
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const axios = require("axios");

// Set Distribution Path
const PORT = 5555;
const distPath = path.resolve(__dirname, "..", "dist"); //serves the hmtl file of the application as default on load

// Use Middleware
app.use(express.json()); // handles parsing content in the req.body from post/update requests
app.use(express.static(distPath)); // Statically serves up client directory
app.use(express.urlencoded({ extended: true })); // Parses url (allows arrays and objects)

// Create API Routes

// app.get('/', (req, res) => { // Main Page GET ROUTE
//   res.send('<a href="/auth/google">Authenticate with google</a>')
// });

// app.get('/!!user')

// router.get('/login', function(req, res, next) { // Login GET ROUTE
//   res.render('login')
// });

//GET req all LA trail data from external API
app.get('/api/TrailsList', (req, res) => {
  // res.send();
  // console.log('Line 31 = ', req.query);
  axios.get(`https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${req.query.lat}&lon=${req.query.lon}&radius=100`,)
  .then(data => {
    console.log('Line 34 = ', data);
    res.send(data).status(200);
  })
  .catch((err) => {
    console.error('ERROR: ', err);
    res.sendStatus(404);
  })
})


// launches the server from localhost on port 5555
app.listen(PORT, () => {
  console.log(`
  Listening at: http://localhost:${PORT}
  `);
});


