import express from "express";
import { addBlog } from "../controllers/blogController.js";
import Upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", Upload.single("image"), auth, addBlog);
