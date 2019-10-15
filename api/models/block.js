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

blockSchema.virtual('hallName', {
    ref: 'Hall',
    localField: 'hallId',
    foreignField: '_id',
    justOne: true
});

 module.exports = mongoose.model('Block', blockSchema);

//  hall: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Hall',
//     default: 'Not assigned'
// }