const express = require("express");
const mongoose = require("mongoose");
const Student = require("./api/models/student.model.js");
const Admin = require("./api/models/admin.model.js");
const Hall = require("./api/models/hall.model.js");
const Block = require("./api/models/block.model.js");
const Room = require("./api/models/room.model.js");

const URI = 'mongodb://localhost:27017/schooldb';
const conn = mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
conn.then(() => console.log("Database Connection Done!"));


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/students', (req, res) => {
    res.json({"message": "This service is working correctly"});
});

app.post('/students', (req, res) => {
    
    const ns = new Student(req.body);
    ns.save((err, data) => {
        if(err){
            return console.log(err);
        }
        console.log(data);
    });

    res.render('student.html');
});

app.post('/room', (req, res) => {
    
    const room = new Room(req.body);
    room.save((err, data) => {
        if(err){
            return console.log(err);
        }
        console.log(data);
    });

    res.render('student.html');
});

app.listen(5000, () => {
    console.log("Web server started!");
});
