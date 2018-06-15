const express = require('express')
const app = express()

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', (req, res) => res.send('Hello World!'))


app.route('/api/cats').get((req, res) => {
    res.send({
      cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
  });

app.route('/getLeagueTable').get((req, res) => {
  res.send(JSON.stringify([
      {position: 1, teamName: "Manchester City", points: 100},
      {position: 2, teamName: "Manchester United", points: 81},
      {position: 3, teamName: "Tottenham Hotspur", points: 77},
      {position: 4, teamName: "Liverpool FC", points: 75},
      {position: 5, teamName: "Chelsea", points: 70},
      {position: 6, teamName: "Arsenal", points: 63}]
  )
)});

app.listen(4003, () => console.log('Example app listening on port 4002!'))