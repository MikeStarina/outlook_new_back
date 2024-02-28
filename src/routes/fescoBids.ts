import { Router } from "express";
import { fescoBids } from "../controllers/fescoBids";



const router = Router();


router.get('/', fescoBids);


export default router;