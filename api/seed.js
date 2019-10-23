const mongoose = require('mongoose');

const Admin = require('./models/admin');
const Hall = require('./models/hall');
const Block = require('./models/block');
const Room = require('./models/room');

const URI = 'mongodb://localhost:27017/schooldb';
mongoose.connect(URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

let admin = new Admin({
    adminID: '10665054',
    adminPin: '6789',
    adminName: 'Esther Ankomah'
});

admin.save();

let halls = [
    new Hall({
        hallName: 'Dr Hilla Limann',
        hallTutor: 'Mrs Elana Balamy'
    }),
    new Hall({
        hallName: 'Prof Alexander Adum Kwapong',
        hallTutor: 'Dr Louis Ashwan',
    }),
    new Hall({
        hallName: 'Elizabeth Frances Sey',
        hallTutor: 'Mr Kofi Agbanyo',
    }),
    new Hall({
        hallName: 'Jean Nelson Akah',
        hallTutor: 'Mrs Nhyira Nyamekye'
    })
];

for(let i = 0; i < halls.length; i++){
    halls[i].save();
}

let createBlocks = async()=>{
    let Limann = await Hall.findOne({
        hallName: 'Dr Hilla Limann'
    });
    const LimannID = Limann._id;
    let LimannBlocks = [
        new Block({
            blockName: 'A',
            hall: LimannID
        }),
        new Block({
            blockName: 'B',
            hall: LimannID
        }),
        new Block({
            blockName: 'C',
            hall: LimannID
        }),
        new Block({
            blockName: 'D',
            hall: LimannID
        }),
    ];

    for(let i = 0; i < LimannBlocks.length; i++){
        LimannBlocks[i].save();
    }

    let Kwapong = await Hall.findOne({
        hallName: 'Prof Alexander Adum Kwapong'
    });
    const KwapongID = Kwapong._id;
    let KwapongBlocks = [
        new Block({
            blockName: 'A',
            hall: KwapongID
        }),
        new Block({
            blockName: 'B',
            hall: KwapongID
        }),
        new Block({
            blockName: 'C',
            hall: KwapongID
        }),
        new Block({
            blockName: 'D',
            hall: KwapongID
        }),
    ];

    for(let i = 0; i < KwapongBlocks.length; i++){
        KwapongBlocks[i].save();
    }

    let Sey = await Hall.findOne({
        hallName: 'Elizabeth Frances Sey'
    });
    const SeyID = Sey._id;
    let SeyBlocks = [
        new Block({
            blockName: 'A',
            hall: SeyID
        }),
        new Block({
            blockName: 'B',
            hall: SeyID
        }),
        new Block({
            blockName: 'C',
            hall: SeyID
        }),
        new Block({
            blockName: 'D',
            hall: SeyID
        }),
    ];

    for(let i = 0; i < SeyBlocks.length; i++){
        SeyBlocks[i].save();
    }

    let Nelson = await Hall.findOne({
        hallName: 'Jean Nelson Akah'
    });
    const NelsonID = Nelson._id;
    let NelsonBlocks = [
        new Block({
            blockName: 'A',
            hall: NelsonID
        }),
        new Block({
            blockName: 'B',
            hall: NelsonID
        }),
        new Block({
            blockName: 'C',
            hall: NelsonID
        }),
        new Block({
            blockName: 'D',
            hall: NelsonID
        }),
    ];

    for(let i = 0; i < NelsonBlocks.length; i++){
        NelsonBlocks[i].save();
    }
}
createBlocks();

let createLimannRooms = async()=>{
    let Limann = await Hall.findOne({
        hallName: 'Dr Hilla Limann'
    });
    const LimannID = Limann._id;

    let LimannBlockA = await Block.find({
        blockName: 'A',
        hall: LimannID
    });
    const LimannBlockAID = LimannBlockA._id;

    let LimannBlockARooms = [
        new Room({
            roomNo: '1001',
            block: LimannBlockAID
        }),
        new Room({
            roomNo: '1002',
            block: LimannBlockAID
        }),
        new Room({
            roomNo: '1003',
            block: LimannBlockAID
        }),
        new Room({
            roomNo: '1004',
            block: LimannBlockAID
        }),
        new Room({
            roomNo: '1005',
            block: LimannBlockAID
        }),
    ];

    for(let i = 0; i <LimannBlockARooms.length; i++){
       LimannBlockARooms[i].save();
    }


    let LimannBlockB = await Block.find({
        blockName: 'B',
        hall: LimannID
    });
    const LimannBlockBID = LimannBlockB._id;

    let LimannBlockBRooms = [
        new Room({
            roomNo: '1006',
            block: LimannBlockBID
        }),
        new Room({
            roomNo: '1007',
            block: LimannBlockBID
        }),
        new Room({
            roomNo: '1008',
            block: LimannBlockBID
        }),
        new Room({
            roomNo: '1009',
            block: LimannBlockBID
        }),
        new Room({
            roomNo: '1010',
            block: LimannBlockBID
        }),
    ];

    for(let i = 0; i <LimannBlockBRooms.length; i++){
       LimannBlockBRooms[i].save();
    }

    let LimannBlockC = await Block.find({
        blockName: 'C',
        hall: LimannID
    });
    const LimannBlockCID = LimannBlockC._id;

    let LimannBlockCRooms = [
        new Room({
            roomNo: '1011',
            block: LimannBlockCID
        }),
        new Room({
            roomNo: '1012',
            block: LimannBlockCID
        }),
        new Room({
            roomNo: '1013',
            block: LimannBlockCID
        }),
        new Room({
            roomNo: '1014',
            block: LimannBlockCID
        }),
        new Room({
            roomNo: '1015',
            block: LimannBlockCID
        }),
    ];

    for(let i = 0; i <LimannBlockCRooms.length; i++){
       LimannBlockCRooms[i].save();
    }

    let LimannBlockD = await Block.find({
        blockName: 'D',
        hall: LimannID
    });
    const LimannBlockDID = LimannBlockD._id;

    let LimannBlockDRooms = [
        new Room({
            roomNo: '1001',
            block: LimannBlockDID
        }),
        new Room({
            roomNo: '1002',
            block: LimannBlockDID
        }),
        new Room({
            roomNo: '1003',
            block: LimannBlockDID
        }),
        new Room({
            roomNo: '1004',
            block: LimannBlockDID
        }),
        new Room({
            roomNo: '1005',
            block: LimannBlockDID
        }),
    ];

    for(let i = 0; i <LimannBlockDRooms.length; i++){
       LimannBlockDRooms[i].save();
    }
    
}

createLimannRooms();

let createKwapongRooms = async()=>{
    let Kwapong = await Hall.findOne({
        hallName: 'Prof Alexander Adum Kwapong'
    });
    const KwapongID = Kwapong._id;

    let KwapongBlockA = await Block.find({
        blockName: 'A',
        hall: KwapongID
    });
    const KwapongBlockAID = KwapongBlockA._id;

    let KwapongBlockARooms = [
        new Room({
            roomNo: '1001',
            block: KwapongBlockAID
        }),
        new Room({
            roomNo: '1002',
            block: KwapongBlockAID
        }),
        new Room({
            roomNo: '1003',
            block: KwapongBlockAID
        }),
        new Room({
            roomNo: '1004',
            block: KwapongBlockAID
        }),
        new Room({
            roomNo: '1005',
            block: KwapongBlockAID
        }),
    ];

    for(let i = 0; i <KwapongBlockARooms.length; i++){
       KwapongBlockARooms[i].save();
    }

    let KwapongBlockB = await Block.find({
        blockName: 'B',
        hall: KwapongID
    });
    const KwapongBlockBID = KwapongBlockB._id;

    let KwapongBlockBRooms = [
        new Room({
            roomNo: '1006',
            block: KwapongBlockBID
        }),
        new Room({
            roomNo: '1007',
            block: KwapongBlockBID
        }),
        new Room({
            roomNo: '1008',
            block: KwapongBlockBID
        }),
        new Room({
            roomNo: '1009',
            block: KwapongBlockBID
        }),
        new Room({
            roomNo: '1010',
            block: KwapongBlockBID
        }),
    ];

    for(let i = 0; i <KwapongBlockBRooms.length; i++){
       KwapongBlockBRooms[i].save();
    }

    let KwapongBlockC = await Block.find({
        blockName: 'C',
        hall: KwapongID
    });
    const KwapongBlockCID = KwapongBlockC._id;

    let KwapongBlockCRooms = [
        new Room({
            roomNo: '1011',
            block: KwapongBlockCID
        }),
        new Room({
            roomNo: '1012',
            block: KwapongBlockCID
        }),
        new Room({
            roomNo: '1013',
            block: KwapongBlockCID
        }),
        new Room({
            roomNo: '1014',
            block: KwapongBlockCID
        }),
        new Room({
            roomNo: '1015',
            block: KwapongBlockCID
        }),
    ];

    for(let i = 0; i <KwapongBlockCRooms.length; i++){
       KwapongBlockCRooms[i].save();
    }

    let KwapongBlockD = await Block.find({
        blockName: 'D',
        hall: KwapongID
    });
    const KwapongBlockDID = KwapongBlockD._id;

    let KwapongBlockDRooms = [
        new Room({
            roomNo: '1001',
            block: KwapongBlockDID
        }),
        new Room({
            roomNo: '1002',
            block: KwapongBlockDID
        }),
        new Room({
            roomNo: '1003',
            block: KwapongBlockDID
        }),
        new Room({
            roomNo: '1004',
            block: KwapongBlockDID
        }),
        new Room({
            roomNo: '1005',
            block: KwapongBlockDID
        }),
    ];

    for(let i = 0; i <KwapongBlockDRooms.length; i++){
       KwapongBlockDRooms[i].save();
    }
    
}

createKwapongRooms();

let createSeyRooms = async()=>{
    let Sey = await Hall.findOne({
        hallName: 'Elizabeth Frances Sey'
    });
    const SeyID = Sey._id;

    let SeyBlockA = await Block.find({
        blockName: 'A',
        hall: SeyID
    });
    const SeyBlockAID = SeyBlockA._id;

    let SeyBlockARooms = [
        new Room({
            roomNo: '1001',
            block: SeyBlockAID
        }),
        new Room({
            roomNo: '1002',
            block: SeyBlockAID
        }),
        new Room({
            roomNo: '1003',
            block: SeyBlockAID
        }),
        new Room({
            roomNo: '1004',
            block: SeyBlockAID
        }),
        new Room({
            roomNo: '1005',
            block: SeyBlockAID
        }),
    ];

    for(let i = 0; i <SeyBlockARooms.length; i++){
       SeyBlockARooms[i].save();
    }

    let SeyBlockB = await Block.find({
        blockName: 'B',
        hall: SeyID
    });
    const SeyBlockBID = SeyBlockB._id;

    let SeyBlockBRooms = [
        new Room({
            roomNo: '1006',
            block: SeyBlockBID
        }),
        new Room({
            roomNo: '1007',
            block: SeyBlockBID
        }),
        new Room({
            roomNo: '1008',
            block: SeyBlockBID
        }),
        new Room({
            roomNo: '1009',
            block: SeyBlockBID
        }),
        new Room({
            roomNo: '1010',
            block: SeyBlockBID
        }),
    ];

    for(let i = 0; i <SeyBlockBRooms.length; i++){
       SeyBlockBRooms[i].save();
    }

    let SeyBlockC = await Block.find({
        blockName: 'C',
        hall: SeyID
    });
    const SeyBlockCID = SeyBlockC._id;

    let SeyBlockCRooms = [
        new Room({
            roomNo: '1011',
            block: SeyBlockCID
        }),
        new Room({
            roomNo: '1012',
            block: SeyBlockCID
        }),
        new Room({
            roomNo: '1013',
            block: SeyBlockCID
        }),
        new Room({
            roomNo: '1014',
            block: SeyBlockCID
        }),
        new Room({
            roomNo: '1015',
            block: SeyBlockCID
        }),
    ];

    for(let i = 0; i <SeyBlockCRooms.length; i++){
       SeyBlockCRooms[i].save();
    }

    let SeyBlockD = await Block.find({
        blockName: 'D',
        hall: SeyID
    });
    const SeyBlockDID = SeyBlockD._id;

    let SeyBlockDRooms = [
        new Room({
            roomNo: '1016',
            block: SeyBlockDID
        }),
        new Room({
            roomNo: '1017',
            block: SeyBlockDID
        }),
        new Room({
            roomNo: '1018',
            block: SeyBlockDID
        }),
        new Room({
            roomNo: '1019',
            block: SeyBlockDID
        }),
        new Room({
            roomNo: '1020',
            block: SeyBlockDID
        }),
    ];

    for(let i = 0; i <SeyBlockDRooms.length; i++){
       SeyBlockDRooms[i].save();
    }
    
}

createSeyRooms();

let createNelsonRooms = async()=>{
    let Nelson = await Hall.findOne({
        hallName: 'Jean Nelson Akah'
    });
    const NelsonID = Nelson._id;

    let NelsonBlockA = await Block.find({
        blockName: 'A',
        hall: NelsonID
    });
    const NelsonBlockAID = NelsonBlockA._id;

    let NelsonBlockARooms = [
        new Room({
            roomNo: '1001',
            block: NelsonBlockAID
        }),
        new Room({
            roomNo: '1002',
            block: NelsonBlockAID
        }),
        new Room({
            roomNo: '1003',
            block: NelsonBlockAID
        }),
        new Room({
            roomNo: '1004',
            block: NelsonBlockAID
        }),
        new Room({
            roomNo: '1005',
            block: NelsonBlockAID
        }),
    ];

    for(let i = 0; i <NelsonBlockARooms.length; i++){
       NelsonBlockARooms[i].save();
    }

    let NelsonBlockB = await Block.find({
        blockName: 'B',
        hall: NelsonID
    });
    const NelsonBlockBID = NelsonBlockB._id;

    let NelsonBlockBRooms = [
        new Room({
            roomNo: '1006',
            block: NelsonBlockBID
        }),
        new Room({
            roomNo: '1007',
            block: NelsonBlockBID
        }),
        new Room({
            roomNo: '1008',
            block: NelsonBlockBID
        }),
        new Room({
            roomNo: '1009',
            block: NelsonBlockBID
        }),
        new Room({
            roomNo: '1010',
            block: NelsonBlockBID
        }),
    ];

    for(let i = 0; i <NelsonBlockBRooms.length; i++){
       NelsonBlockBRooms[i].save();
    }

    let NelsonBlockC = await Block.find({
        blockName: 'C',
        hall: NelsonID
    });
    const NelsonBlockCID = NelsonBlockC._id;

    let NelsonBlockCRooms = [
        new Room({
            roomNo: '1011',
            block: NelsonBlockCID
        }),
        new Room({
            roomNo: '1012',
            block: NelsonBlockCID
        }),
        new Room({
            roomNo: '1013',
            block: NelsonBlockCID
        }),
        new Room({
            roomNo: '1014',
            block: NelsonBlockCID
        }),
        new Room({
            roomNo: '1015',
            block: NelsonBlockCID
        }),
    ];

    for(let i = 0; i <NelsonBlockCRooms.length; i++){
       NelsonBlockCRooms[i].save();
    }

    let NelsonBlockD = await Block.find({
        blockName: 'D',
        hall: NelsonID
    });
    const NelsonBlockDID = NelsonBlockD._id;

    let NelsonBlockDRooms = [
        new Room({
            roomNo: '1016',
            block: NelsonBlockDID
        }),
        new Room({
            roomNo: '1017',
            block: NelsonBlockDID
        }),
        new Room({
            roomNo: '1018',
            block: NelsonBlockDID
        }),
        new Room({
            roomNo: '1019',
            block: NelsonBlockDID
        }),
        new Room({
            roomNo: '1020',
            block: NelsonBlockDID
        }),
    ];

    for(let i = 0; i <NelsonBlockDRooms.length; i++){
       NelsonBlockDRooms[i].save();
    }
    
}

createNelsonRooms();

setTimeout(()=>{
    mongoose.disconnect();
}, 5000);