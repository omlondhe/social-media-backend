import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export async function connectDB() {
    try {
        const dbConnectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `MongoDB connected!\nDB Host ${dbConnectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB ERROR: ", error);
        process.exit(1);
    }
}
