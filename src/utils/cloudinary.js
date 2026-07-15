import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadFileOnCloudinary = async (localPath) => {
    try {
        if(!localPath) return null;
        const response = await cloudinary.uploader.upload( localPath, {
            resource_type: "auto"
        })

        console.log("File uploaded on cloudinary successfully : ", response.url);

        return response;
    } catch (error) {
        fs.unlinkSync(localPath);
        console.error("There is an error while uploading file on cloudinary :", error);
        return null
    }
}

export { uploadFileOnCloudinary };