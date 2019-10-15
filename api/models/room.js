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
        type: String
    }]
});

roomSchema.virtual('blockNo',{
    ref:'Block',
    localField:'blockId',
    foreignField:'_id',
    justOne:true
});

 module.exports = mongoose.model('Room', roomSchema);

//  block: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Block',
//     default: 'Not assigned'
// },
// occupants: [{
//     type:mongoose.Schema.ObjectId,
//     ref:'User'
// }]