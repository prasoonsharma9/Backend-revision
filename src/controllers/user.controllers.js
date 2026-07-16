import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/users.model.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";
import { response } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler((req, res) => {
    const {userName, email, fullName, password} = req.body

    if( [userName, email, fullName, password].some((field) => field?.trim() === "") ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{userName}, {email}]
    })

    if(existedUser) {
        throw new ApiError(409, "User already exist")
    }

    console.log(req.files);
    const avatarLocalPath = req.files?.avatar[0].path;
    const coverImageLocalPath = req.files?.coverImage[0].path;

    if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = uploadFileOnCloudinary(avatarLocalPath);
    const coverImage = uploadFileOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar cloudinary file is required");
    }

    const user = User.create({
        userName,
        email,
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        password
    })

    const createdUser = user.findById(user._id).select("-password -refreshToken");

    if(!createdUser) {
        throw new ApiError(500, "Error while creating the user");
    }

    res.status(200).json(
        new ApiResponse(200, "User Rgistered Successfully", createdUser)
    )
});

export {
    registerUser,
}