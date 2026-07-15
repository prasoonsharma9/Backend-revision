import mongoose, { Schema, SchemaType } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    fullName: {
        type: String,
        require: true,
        index: true,
    },
    avatar:{
        type: String,
        require: true,
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video",
    },
    refreshToken: {
        type: String,
    }

},{timestamps: true});


export const User = mongoose.model("User", userSchema);