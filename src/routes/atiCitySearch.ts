import { Router } from "express";
import { atiCitySearch } from "../controllers/atiCitySearch";






const router = Router();


router.post('/', atiCitySearch);


export default router