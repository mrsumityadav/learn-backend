import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connecttionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n 💀 mongodb connected, DB Host : ${connecttionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection is failed because of :", error)
        process.exit(1)
    }
}

export default connectDB