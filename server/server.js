import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";//since it is db related .js is needed
import adminRouter from "./routes/adminRoutes.js";

const app = express();

await connectDB();

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res)=>res.send("API is working"))
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is running on PORT " + PORT)
})

export default app;