/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=2f72958fb8e3c7930d866226e8cabfa1&units=metric'

const generateButton = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

// Fetch weather data for given zip code from open weather map 
const fetchWeather = async (zip) => {
    document.querySelector('#error').innerHTML = ''
    const request = await fetch(baseURL + zip + apiKey);
    // Transform into JSON
    const apiResponse = await request.json()
    if (apiResponse.cod === 200) {
        return apiResponse;
    }
    else {
        throw 'Invalid zip code';
    }
}


// Post data to our API
const postData = async (path, data) => {
    fetch(path, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}


// Update the UI with the most recent entry
const displayData = async (url) => {
    const request = await fetch(url);
    // Transform into JSON
    const apiResponse = await request.json()
    if (apiResponse.length > 0) {
        // Picks the most recent record
        const recentEntry = apiResponse[ apiResponse.length - 1 ]

        // Update elements content
        document.querySelector('#date').innerHTML = 'Date: ' + recentEntry.date;
        document.querySelector('#temp').innerHTML = 'Temperature: ' + recentEntry.temperature + '°C';
        document.querySelector('#content').innerHTML = 'User feelings: ' + recentEntry.response;
        return
    }
    else {
        throw 'No data to display';
    }
}


// Listen for generate button click
generateButton.addEventListener('click', e => {

    // Fetch open weather api
    fetchWeather(document.querySelector('#zip').value)

        // Post the inputed data the our api 
        .then(response => postData('/weather/add', {
            temperature: response.main.temp,
            date: newDate,
            feelings: document.querySelector('#feelings').value
        }))

        // Update UI with the recent entry
        .then(() => displayData('/weather/data'))

        // Catch any error along the way with these chained promises and display it
        .catch(error => {
            document.querySelector('#error').textContent = error;
        })
})