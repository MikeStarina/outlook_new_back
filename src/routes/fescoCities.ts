import { Router } from "express";
import { fescoCities } from "../controllers/fescoCities";
import { fescoLocationsTo } from "../controllers/fescoLocationsTo";



const router = Router();


router.get('/', fescoCities);
router.get('/locTo', fescoLocationsTo);


export default router;