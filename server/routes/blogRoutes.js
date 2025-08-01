import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controllers/blogController.js";
import Upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", Upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.post("/delete", auth, deleteBlogById);

blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);

blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);

export default blogRouter;
