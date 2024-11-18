import { Router } from "express";
import { getDirections } from "../controllers/directions";




const router = Router();



router.get('/', getDirections);



export default router;