const mongoose = require('mongoose');

const Hall = mongoose.model('Hall');
const Student = mongoose.model('Student');
const Block = mongoose.model('Block');
const Room = mongoose.model('Room');

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

exports.displayHalls = async(req, res) => {
    // let student = await Student.findOne({
    //     studentID:req.body.studentID
    // });
    // let room = await Room.findOne({
    //     roomNo:req.body.roomNo
    // });

    let student = await Student.find();
    const students = student.filter(stud => stud.residentialStatus == "Assigned");
    console.log(students);
}