import { Request, Response, NextFunction } from "express";
import directions from "../models/directions";






export const getDirections = async (req: Request, res: Response, next: NextFunction) => {



  try {

    const dirData = await directions.find({});
    return res.status(200).send(dirData);


  }
  catch (e) {
    next(e);
  }


}