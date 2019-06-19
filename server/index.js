var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;
var Axios = require('axios');
var config = require('../config.js');


app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/weatherData', (req, res) => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&APPID=${config.weatherAPIKey}`)
    .then(results => res.send(results.data))
    .catch(error => console.log(error))

})

app.get('/weatherDataByCoordinates', (req, res) => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.latitude}&lon=${req.query.longitude}&APPID=${config.weatherAPIKey}`)
    .then(results => res.send(results.data))
    .catch(error => console.log(error))
    
})

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});