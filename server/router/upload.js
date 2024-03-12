import  express  from "express";
import upload from "../multer/upload.js";
import { getImage, uploadFile } from '../controller/upload.js';


const router=express.Router();
router.post("/upload",upload.single('file'),uploadFile)
.get("/files/:id",getImage)

export default router;