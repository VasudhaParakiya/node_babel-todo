import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = new mongoose.model("ToDo", todoSchema);
// module.exports = ToDo;
export default ToDo;
