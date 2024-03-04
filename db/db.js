import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/todo")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
    });
};
// module.exports = dbConnection;
export default dbConnection;
