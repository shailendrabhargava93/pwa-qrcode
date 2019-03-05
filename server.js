// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/pwa-qrcode'));

app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/pwa-qrcode/index.html');  
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
