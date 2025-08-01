import express from "express";
import auth from "../middleware/auth.js";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashBoard } from "../controllers/adminController.js";
import { getAllBlogs } from "../controllers/blogController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments",auth, getAllComments);
adminRouter.get("/blogs",auth, getAllBlogs);
adminRouter.post("/delete-comment",auth, deleteCommentById);
adminRouter.post("/approve-comment",auth, approveCommentById);
adminRouter.get("/dashboard",auth, getDashBoard);

export default adminRouter;
