const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
    blockName: {
        type: String,
        required: true
    },
    hall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hall',
        default: 'Not assigned'
    }
});

 module.exports = mongoose.model('Block', blockSchema);
