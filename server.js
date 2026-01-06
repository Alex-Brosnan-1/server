const express = require('express'); //web server
const cors = require('cors') //Allows access on localhost
const bodyParser = require("body-parser"); //Allows json data in body section

const app = express();
const port = 3000;
const message = "hello world";

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Specify allowed methods
}));
app.use(bodyParser.json());

// Define a GET route at the root URL ('/')
app.get('/', (req, res) => {

    // Use res.json() to send a JSON response
    // It automatically converts the provided object/variable into JSON
    res.json({
        data: message
    });
});