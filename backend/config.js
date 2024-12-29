import mongoose from "mongoose";
export const connect_db = async () => {
  try {
    const connt = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connection : ${connt.connection.host}`);
  } catch (Err) {
    process.exit(1);
  }
};
