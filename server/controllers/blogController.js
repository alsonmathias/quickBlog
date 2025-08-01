import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    //check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missinng required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    //Upload image to imagekit
    const response = await imagekit({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });
    //optimization of imagekit through URL tranformation

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, //  Auto compression can be in percentage if in auto quality will be good while the size is less
        { fomrat: "webp" }, // convert to modern format
        { width: "1280" }, // width resizing
      ],
    });

    const image = optimizedImageUrl;
    // to save in mongoDB
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    response.json({ success: true, message: "Blog added sucessfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
