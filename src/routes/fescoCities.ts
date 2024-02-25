import { Router } from "express";
import { fescoCities } from "../controllers/fescoCities";



const router = Router();


router.get('/', fescoCities);


export default router;