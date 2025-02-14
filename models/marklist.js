import mongoose, { model, Schema } from "mongoose";

//Write the schema
const Markschema =new Schema({

      student_name: {
        type: String,
        required: true,
      },
      roll_no: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      oops: {
        type: Number,
        required: true,
      },
      ds: {
        type: Number,
        required: true,
      },
      os: {
        type: Number,
        required: true,
      },
      java: {
        type: Number,
        required: true,
      },
      fds: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
      },
      grade: {
        type: String,
      },
    
})


//Create the model

export default mongoose.model('marklist',Markschema)