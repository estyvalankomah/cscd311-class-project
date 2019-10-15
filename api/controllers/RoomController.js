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
        block:req.body.block,
    });
    const rooms = room.filter(roo => roo.occupants.length !== 4);
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
    let block = await Block.findOne({
        _id:room.block  
    });
    let hall = await Hall.findOne({
        _id:block.hall
    })
    if(student.room == 'Not assigned'){
        if(room.occupants.length < 4 ){
            if(!room.occupants.includes(student.studentID)){
                await room.update({
                    $push:{
                        occupants: req.body.studentID
                    }
                });
                await student.update({
                    residentialStatus:"Assigned",
                    room:room.roomNo,
                    block:block.blockName,
                    hall:hall.hallName,
                    
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
    let room = await Room.findOne({
        roomNo:req.body.roomNo
    });
    return res.status(200)
            .json({
                ok:true,
                error:false,
                success:true,
                data:room,
            });
};
