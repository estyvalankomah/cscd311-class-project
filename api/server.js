const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const mongoose = require('mongoose');
const cors = require('cors');

//import models
require("./api/models/student.js");
require("./api/models/admin.js");
require("./api/models/hall.js");
require("./api/models/block.js");
require("./api/models/room.js");

//connect to database
const URI = 'mongodb://localhost:27017/schooldb';
const conn = mongoose.connect(URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

conn.then(() => console.log("Database Connection Done!"));

const app = express();

app.set('views', __dirname + '../views');
app.engine('html', require('ejs').renderFile);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(validator());

//routes
app.use('/api', require('./routes'));

app.listen(5000, err => {
    if (err) throw err;
    console.log("Web server started!");
});