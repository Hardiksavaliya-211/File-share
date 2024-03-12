import  express  from "express";
import router from "./router/upload.js";
import cors from 'cors'
import DBConnection from "./data/db.js";
import mongoose from "mongoose";
import path from "path";
const app=express();
app.use(express.static( 'build'))
app.use(cors())
app.use("/",router);
// DBConnection();//this is for making connecction with mongodb
main().catch((err) => console.log(err));
// 88dyD0XaWuOSAWIX
async function main() {
  await mongoose.connect("mongodb+srv://hardik96500c:88dyD0XaWuOSAWIX@cluster0.zpikxcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("database connected");
}
app.listen(8080,()=>{
    console.log("server started")
})

