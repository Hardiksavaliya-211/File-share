import File from "../model/file.js";

export const uploadFile=async (req,res)=>{
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    
    try {
        const file = await File.create(fileObj);
        console.log(file)
        res.status(200).json({path:`/files/${file._id }`})
    }catch(err){
        console.log(err)
        res.status(200).json({error:err})
    }
}

export const getImage=async(req,res)=>{
    console.log(req.params.id)
    try{
        const data=await File.findById(req.params.id);

        data.downloadCount++;

        await data.save();
        
        res.download(data.path,data.name)
    }catch(err){
        res.json({error:err})
    }
}