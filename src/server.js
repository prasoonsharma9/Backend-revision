import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import dns from "dns";
import { app } from "./app.js"


dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.error(
        "Error while connectioning the database (server.js) : ",
        error
      );
    });

    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed (server.js) : ", error);
  });

/*
import { app } from "./app.js"
import { DB_NAME } from "./constants.js";

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
