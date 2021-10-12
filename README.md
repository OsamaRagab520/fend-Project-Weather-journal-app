# Weather-Journal App Project
### Introduction 

This was the second project in "Front-end Professional Nanodgree" to apply what we have learned about __Node__, __Express__, and __JS asynchronicity__ to write server side code and use it with client side code.

### Pre-requisites and Local Development
Developers using this project should already have Node.js on their local machines.

To run the application locally run the following commands:

    $ node server.js

The application is run on `http://127.0.0.1:3000/` by default.

### Description 

Project was about building our own API and use an external API then writing our client side code to fetch and post data our data then update the UI.

### What i did to do so:

1. Implement server-side code (API) with two main routes one for posting the data and another for retrieving the data.
2. Used an external API to fetch real-world data (open weather map API).
3. leveraged JS asynchronicity abilities to chain events that depend on each other to achieve the desired output in the client-side code. 

### Project Structure

    │   package-lock.json
    │   README.md
    │   server.js
    │
    ├───commentsOnlyJS
    │       app.js
    │       server.js
    │
    ├───node_modules
    │
    └───website
            app.js
            index.html
            style.css
            
