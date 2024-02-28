import { Router } from "express";
import { atiDistanceCalc } from "../controllers/atiDistanceCalc";






const router = Router();


router.get('/', atiDistanceCalc);


export default router;