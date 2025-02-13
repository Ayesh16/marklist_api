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
      Oops: {
        type: Number,
        required: true,
      },
      DS: {
        type: Number,
        required: true,
      },
      OS: {
        type: Number,
        required: true,
      },
      Java: {
        type: Number,
        required: true,
      },
      FDS: {
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