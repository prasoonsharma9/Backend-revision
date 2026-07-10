import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config({
    path: "./.env"
});

import connectDB from "./db/index.js";


connectDB();















/*
import express from "express";
const app = express();

;(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: DB_NAME
        });
        console.log("Connected to the database successfully.");

        app.on("error :", (error) => {
            console.log("Error while connecting to the database in try block", error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error while connecting to the database :", error);
    }
})()

*/