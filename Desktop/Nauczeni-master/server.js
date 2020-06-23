
const sequelize = require('./util/database')
const passport = require('passport');
const  Cors = require('cors');
const bodyParser = require('body-parser');
const express = require ('express');
const app = express();

require('./util/passport');
 app.use(Cors());
 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());
 app.use(passport.initialize());

 
app.listen(3000);
console.log('Server running at http://localhost:3000');
module.exports = app;

