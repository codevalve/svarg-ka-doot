// Required
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Environment
const PORT = process.env.PORT || 3000;

// Express
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));


app.get('/',(req,res)=>{
  res.send('Hello from my app');
})

app.listen(PORT, ()=>{
  debug(`listening on port ${chalk.green(PORT)}`);
});
