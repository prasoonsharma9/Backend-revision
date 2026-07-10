import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);

        console.log("Connected to the database successfully.");
        // console.log(`MongoDB connection host: ${connection}`);
        console.log(`MongoDB connectionn host: ${connection.connection.host}`);

    } catch (error) {
        console.error("Error while connecting to the database (db/index.js) :", error);
        process.exit(1);
    }
};

export default connectDB;