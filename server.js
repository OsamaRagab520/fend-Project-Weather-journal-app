// Setup empty JS object to act as endpoint for all routes
projectData = { weatherApp: [] };

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});


// Routes

// Fetch all project's data
app.get('/weather/data', (req, res) => {
    res.send(projectData.weatherApp);
});

// Add a user entry to project's data
app.post('/weather/add', (req, res) => {
    const entry = {
        temperature: req.body.temperature,
        date: req.body.date,
        response: req.body.feelings,
    }
    projectData.weatherApp.push(entry);
});

