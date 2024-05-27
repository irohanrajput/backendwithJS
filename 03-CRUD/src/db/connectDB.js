import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://tododbuser:${process.env.DB_PASSWORD}@todocluster.jc7qbsz.mongodb.net/?retryWrites=true&w=majority&appName=todoCluster`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
          w: "majority",
          wtimeout: 5000
        }
      }
    );
    console.log("yo baby, connected to the database");
  } catch (err) {
    console.error("could not connect to the database", err);
    process.exit(1);
  }

};

export default connectDB;
