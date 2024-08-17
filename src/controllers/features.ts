import { Request, Response, NextFunction } from "express";
import features from "../models/features";






export const getFeatures = async (req: Request, res: Response, next: NextFunction) => {



  try {

    const featuresData = await features.find({});
    return res.status(200).send(featuresData);


  }
  catch (e) {
    next(e);
  }


}