import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    video: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        require: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }


}, { timestamps: true });


export const Video = mongoose.model("Video", videoSchema);