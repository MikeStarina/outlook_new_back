import { Router } from "express";
import { fescoBids } from "../controllers/fescoBids";



const router = Router();


router.post('/', fescoBids);


export default router;