import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is missing");

await mongoose.connect(uri);
console.log("Connected to Database");
await mongoose.disconnect();