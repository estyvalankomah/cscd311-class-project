const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNo: {
        type: String,
        required: true
    },
    block: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Block',
        default: 'Not assigned'
    },
    occupants: {
        type: Array
    }
});

 module.exports = mongoose.model('Room', roomSchema);
