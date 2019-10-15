const mongoose = require('mongoose');

const Hall = mongoose.model('Hall');

exports.createHall = async(req, res) => {
    let hall = new Hall(req.body);
    await hall.save();
    return res.status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:hall
        });
};

exports.getHalls = async(req, res) => {
    let hall = await Hall.find();
    return res
        .status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:hall
        })
}