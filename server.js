const 
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  PORT = 3000,
  fridgeRouter = require('./routers/fridgeRouter')

  // Connect to DB
mongoose.connect('mongodb://localhost/fridge', (err) => {
  console.log(err || "Successfully connected to MONGOD")
})


// MiddleWare
app.use(logger('dev'));
app.use(express.json());

// Router

// Routes
app.use('/api/fridges', fridgeRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running ${PORT}`)
})

