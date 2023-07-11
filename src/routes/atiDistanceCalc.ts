import { Router } from "express";
import { atiDistanceCalc } from "../controllers/atiDistanceCalc";






const router = Router();


router.post('/', atiDistanceCalc);


export default router;