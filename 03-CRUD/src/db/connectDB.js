import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://tododbuser:${process.env.DB_PASSWORD}@todocluster.2eepsbr.mongodb.net/?retryWrites=true&w=majority&appName=todoCluster`
    );
    console.log("yo baby, connected to the database");
  } catch (err) {
    console.error("could not connect to the database", err);
    process.exit(1);
  }

};

export default connectDB;
