import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;


app.use(bodyParser.json());
app.use(cors());



app.use("/api", route);


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch(error => {
        console.error("DB connection error:", error);
        process.exit(1); 
    });
