import Marks from "../models/marklist.model.js";

export const MarksIndex=async(req,res)=>{
   try{
    const marks=await Marks.find()
    res.json(marks)
   }catch(error){
    res.status(500).json({message:error.message});
   }
};

export const MarksCreate=async(req,res)=>{
    //id,title,name,dept
   
    //Validate the user data
    const newMarks=new Marks({
        id:req.body.id,
        student_name:req.body.student_name,
        roll_no:req.body.roll_no,
        department:req.body.department,
        Oops:req.body.Oops,
        DS:req.body.DS,
        OS:req.body.OS,
        Java:req.body.Java,
        FDS:req.body.FDS,
        total:req.body.total,
        grade:req.body.grade,
    });

try{
    const marks=await newMarks.save();
    return res.status(201).json(marks);
}catch(error){
    return res.status(400).json({message:error.message});
}


};

export const MarksDetails=async(req,res)=>{
    try{
        const marks= await Marks.findById(req.params.id);
        if(marks==null){
            return res.status(404).json({message:"Cannot find marks"});
        }else{
            res.json(marks)
        }
       }catch(error){
         return res.status(500).json({message:error.message});
       }
}

export const MarksUpdate=async(req,res)=>{
    try{
        const totalMarks = req.body.Oops + req.body.DS + req.body.OS + req.body.Java + req.body.FDS;
        const result= await Marks.findByIdAndUpdate({_id:req.params.id},{
            id:req.body.id,
            student_name:req.body.student_name,
            roll_no:req.body.roll_no,
            department:req.body.department,
            Oops:req.body.Oops,
            DS:req.body.DS,
            OS:req.body.OS,
            Java:req.body.Java,
            FDS:req.body.FDS,
            total:totalMarks,
            grade:req.body.grade,
    },{
        new:true,
    });
    res.status(200).json(result);
}catch(error){
    res.status(400).json({message:error.message});
}
};

export const MarksDelete=async(req,res)=>{
    const marksId=req.params.id;

    try{
        await Marks.deleteOne({_id:marksId});
        res.json({message:"Message Deleted!"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};