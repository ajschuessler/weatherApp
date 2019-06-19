var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/../client/dist')));


app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});