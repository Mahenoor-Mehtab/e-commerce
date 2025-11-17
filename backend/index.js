import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config()
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./model/authRoutes.js";
import productRoutes from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";

// connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
  origin:["http://localhost:5173", "http://localhost:5174"],
  credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoute);




const PORT =process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
