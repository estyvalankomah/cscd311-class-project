const mongoose = require('mongoose');

const Student = require("../models/student.js");
const Hall = require("../models/hall.js");
const Block = require("../models/block.js");
const Room = require("../models/room.js");


exports.createRoom = async(req, res) => {
    let room = new Room(req.body);
    await room.save();
    return res.status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:room
        });
};

exports.getRooms = async (req, res) => {
    let room = await Room.find({
        hallId:req.params.hallId,
    });
    const rooms = room.filter(roo => roo.usersId.length !== 4);
    return res.status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:rooms
        });
};

exports.applyToRoom = async (req, res) => {
    let student = await Student.findOne({
        studentID:req.body.studentID
    });
    let room = await Room.findOne({
        roomNo:req.body.roomNo
    });
    if(student.room == null){
        if(room.occupants.length < 4 ){
            if(!room.occupants.includes(student.studentID)){
                await room.update({
                    $push:{
                        occupants: student.studentID
                    }
                });
                await student.update({
                    room:room.roomNo
                });
                return res.status(200)
                    .json({
                        ok:true,
                        error:false,
                        success:true,
                        data:room,
                    });
            }
                return res.status(400)
                    .json({
                        ok:false,
                        error:'Student already registered under this room',
                        success:false,
                    });

        }
            return res.status(400)
                .json({
                    ok:false,
                    error:"Room is full",
                    success:false
                });
    }
        return res.status(400)
            .json({
                ok:false,
                error:"Room already assigned to student",
                success:false
            });
    

};

exports.getRoomsWithUsers = async(req, res) => {
    let room = await Room.find().populate('users');
    return res.status(200)
            .json({
                ok:true,
                error:false,
                success:true,
                data:room,
            });
};
