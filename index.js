const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let individualRoute = require('./routers/user');
app.use('/users',individualRoute);

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true },()=>console.log('db connected'))

let server = http.createServer(app);
server.listen(3000,()=>console.log("server running at port: 3000"));
