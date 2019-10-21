const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

//import models
require("./models/student.js");
require("./models/admin.js");
require("./models/hall.js");
require("./models/block.js");
require("./models/room.js");

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


//set view engine
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// set static files
app.use(express.static(path.join(__dirname, '../public')));

//routes
app.use('/api', require('./routes'));

app.listen(5000, err => {
    if (err) throw err;
    console.log("Web server started!");
});