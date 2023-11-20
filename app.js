// Import required modules
const express = require('express'); // Express.js for building the server
const chalk = require('chalk'); // Chalk for colored console output
const debug = require('debug')('app'); // Debug for debugging
const morgan = require('morgan'); // Morgan for HTTP request logging
const path = require('path'); // Path for working with file and directory paths

// Create an instance of an Express application
const app = express();

// Use Morgan middleware for logging HTTP requests in 'tiny' format
app.use(morgan('tiny'));
// Serve static files (like CSS, images, JavaScript files) from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

// Define a route handler for GET requests made to the root path ('/')
app.get('/', (req, res) => {
    // Send a response back to the client
    res.send('Hello from my app')
})

// Start the server and listen on port 5000
app.listen(5000, () => {
    // Log a debug message indicating the server is running
    debug(`Listening on port ${chalk.greenBright('5000')}`);
    // An alternative way to log the message using console.log
    // console.log(`Listening on port ${chalk.greenBright('5000')}`);
})  