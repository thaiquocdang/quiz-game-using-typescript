
const express = require('express');
const path = require('path');
const app = express();
console.log('hello');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(5000);
console.log('App is running on port 5000');