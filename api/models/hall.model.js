const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
    hallName: {
        type: String,
        required: true,
        unique: true
    },
    hallTutor: {
        type: String,
        unique: true
    }
});

 module.exports = mongoose.model('Hall', hallSchema);
