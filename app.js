// Import the Express module
const express = require('express');
const app = express();

// Define the port to listen on
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Your Node.js app is working 🚀');
});

// Define another route for testing
app.get('/test', (req, res) => {
    res.json({ message: 'This is a test route', status: 'success' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
