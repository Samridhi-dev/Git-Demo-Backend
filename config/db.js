import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MongoDB error: MONGO_URI is missing in Backend/.env");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    console.error(
      "Make sure MongoDB Server is running and MONGO_URI is correct."
    );
    process.exit(1);
  }
};

export default connectDB;
