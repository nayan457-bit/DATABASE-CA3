import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("Mongodb is connected"));
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb