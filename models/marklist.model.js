import { model, Schema } from "mongoose";

//Write the schema
const schema =new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
      },
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
        required: true,
      },
      grade: {
        type: String,
        required: true,
      },
    
})

//Create the model

const Marks=model("Marks",schema);

export default Marks;