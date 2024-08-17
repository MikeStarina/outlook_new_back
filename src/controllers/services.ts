import { Request, Response, NextFunction } from "express";
import services from "../models/services";






export const getServices = async (req: Request, res: Response, next: NextFunction) => {



  try {

    const servicesData = await services.find({});
    return res.status(200).send(servicesData);


  }
  catch (e) {
    next(e);
  }


}