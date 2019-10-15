const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    studentPin: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    residentialStatus: {
        type: String,
        default: 'Not assigned'
    },
    hall: {
        type: String,
        default: 'Not assigned'
    },
    block: {
        type: String,
        default: 'Not assigned'
    },
    room: {
        type: String,
        default: 'Not assigned'
    }
 
});

studentSchema.virtual('roomNo',{
    ref:'Room',
    localField:'room',
    foreignField:'_id',
    justOne:true
});

 module.exports = mongoose.model('Student', studentSchema);

//  hall: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Hall',
//     default: 'Not assigned'
// },
// block: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Block',
//     default: 'Not assigned'
// },
// room: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Room',
//     default: 'Not assigned'
// }