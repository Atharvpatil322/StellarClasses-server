// import mongoose from "mongoose";

// export const connectToMongoDb = async () => {
//     try {
//         const mongoUri = process.env.MONGODB_URI;
//         await mongoose.connect(mongoUri);
//         console.log("MongoDB connected successfully!!!");
//     } catch (err) {
//         console.log('MongoDb connection failed', err);
//     }
// }

import mongoose from "mongoose";

export const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
