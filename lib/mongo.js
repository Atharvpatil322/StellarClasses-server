import mongoose from "mongoose";

export const connectToMongoDb = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully!!!");
    } catch (err) {
        console.log('MongoDb connection failed', err);
    }
}