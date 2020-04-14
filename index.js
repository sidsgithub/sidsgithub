require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const routes = require('./routes');
const app = express();// initialize an app


app.use(bodyParser.json()); // parse json
app.use(cors())

const port = process.env.PORT || 4000;

app.use('/', routes);

app.listen(port, (error) => {

    if (error) {
        console.log(error);
    } else {
        console.log("Server started on port " + port);
    }
})

app.use((error, req, res, next) => {
    res.json({
        success: false,
        error,
    })
});