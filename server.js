const 
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000

mongoose.connect('mongodb://localhost/fridge-practice', (err) => {
  console.log(err || "Successfully connected to MONGOD")
})

app.use(logger('dev'));
app.use(express.json());

app.listen(PORT, (err) => {
  console.log(err || `Server running ${PORT}`)
})