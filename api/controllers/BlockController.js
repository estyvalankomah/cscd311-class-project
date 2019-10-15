const mongoose = require('mongoose');

const Block = mongoose.model('Block');


exports.createBlock = async(req, res) => {
    let block = new Block(req.body);
    await block.save();
    return res.status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:block
        });
};

exports.getBlocks = async (req, res) => {
    let blocks = await Block.find({
        hall:req.params.hall,
    });
    return res.status(200)
        .json({
            ok:true,
            error:false,
            success:true,
            data:blocks
        });
};