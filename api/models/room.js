const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNo: {
        type: String,
        required: true
    },
    block: {
        type: mongoose.Schema.ObjectId,
        ref: 'Block',
        default: 'Not assigned'
    },
    occupants: [{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }]
});

 module.exports = mongoose.model('Room', roomSchema);
