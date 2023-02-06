import { Router } from "express";
import { uploadFunc } from "../controllers/uploads";




const router = Router();




router.post('/', uploadFunc);


export default router;