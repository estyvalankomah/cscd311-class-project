const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminID: {
        type: String,
        required: true,
        unique: true
    },
    adminPin: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true,
    }
});

 module.exports = mongoose.model('Admin', adminSchema);
