const express = require("express");


const userRoutes = require("./routes/User");
const contactRoutes = require("./routes/Contact");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const app = express();
const profileRoutes = require("./routes/Profile")
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
app.use(
	cors()
)
const PORT = 4000;
database.connect();
cloudinaryConnect();

app.listen(PORT,()=>{
    console.log("server started successfully.....");   
})

app.use("/auth", userRoutes);
app.use("/reach", contactRoutes);
app.use("/profile", profileRoutes);
app.use("/course", courseRoutes);
app.use("/payment", paymentRoutes);



app.get("/",(req,res)=>{
    res.send("kabirrrra");
})