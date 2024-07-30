import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "MERN_STACK_EHC_DEPLOYED",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase server selection timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(err => {
    console.log(`Some error occurred while connecting to database: ${err}`);
  });
};
