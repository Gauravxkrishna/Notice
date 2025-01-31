const Notice = require('../models/noticeModel')

// creating new notice route
exports.createNotice = async (req,res)=>{
    try{
        const {title,description,date,batch} = req.body;
        // checking if all fields are filled
        // if(!title || !description || !postedBy || !batch){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Please fill all fields"})
        // }
        // creating new notice
        const notice = await Notice.create({
            title,
            description,
            date,
            batch
        })
        // sending response
        res.status(201).json({
            success:true,
            notice
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:("Cant create a new notice",err.message)
        })
    }
}

// getting all notices route
exports.getNotices = async (req,res)=>{
    try{
        const notices = await Notice.find()
        res.status(200).json({
            success:true,
            notices
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
// getting notice using dates route
exports.getNoticeByDate = async (req,res)=>{
    try{
        const {date} = req.body;
        const notices = await Notice.find({createdAt:date})
        res.status(200).json({
            success:true,
            notices
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
// getting notice by batch route
exports.getNoticeByBatch = async (req,res)=>{
    try{
        const {batch} = req.body;
        const notices = await Notice.find({batch})
        res.status(200).json({
            success:true,
            notices
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
// delete notice by id route
exports.deleteNotice = async (req,res)=>{
    try{
        const notice = await Notice.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            notice
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}