// Import required modules
const express = require('express'); // Express.js for building the server
const chalk = require('chalk'); // Chalk for colored console output
const debug = require('debug')('app'); // Debug for debugging
const morgan = require('morgan'); // Morgan for HTTP request logging
const path = require('path'); // Path for working with file and directory paths

// Set the port number to listen to
const port = process.env.PORT || 5000;
// Create an instance of an Express application
const app = express();

// Use Morgan middleware for logging HTTP requests in 'tiny' format
app.use(morgan('tiny'));
// Serve static files (like CSS, images, JavaScript files) from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

// Set the directory where Express will look for view templates
app.set("views", "./src/views");

// Set the view engine that Express will use to render views. In this case, it's set to 'ejs'
app.set('view engine', 'ejs');

// Define a route handler for GET requests made to the root path ('/')
app.get('/', (req, res) => {
    // Send a response back to the client
    res.render('index', { title: 'Globalmantics', data: ['a', 'b', 'c'] });
})

// Start the server and listen on port 5000
app.listen(5000, () => {
    // Log a debug message indicating the server is running
    debug(`Listening to port ${chalk.green(port)}`);
    // An alternative way to log the message using console.log
    // console.log(`Listening on port ${chalk.greenBright('5000')}`);
})  