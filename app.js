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
//app.use(express.static(path.join(__dirname, '/public')));

// View Engine
app.set('views','./source/views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index', { title: 'Welcome to KaDoot!' });
})

app.listen(PORT, ()=>{
  debug(`listening on port ${chalk.green(PORT)}`);
});
