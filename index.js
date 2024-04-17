const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port if needed

// Define the directory to serve static files
const publicDirectoryPath = path.join(__dirname, 'public');

// Set up middleware to serve static files
app.use(express.static(publicDirectoryPath));

// Start the server
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
