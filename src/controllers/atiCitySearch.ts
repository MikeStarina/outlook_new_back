import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import ServerError from '../utils/server-error-class';
import { ATI_TOKEN } from '../app';




export const atiCitySearch = async (req: Request, res: Response, next: NextFunction) => {

  const { userCity } = await req.body.data;

  try {

    const atiCityData = await fetch(`https://api.ati.su/v1.0/dictionaries/cities?name=${userCity}&cityNameOnly=true`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${ATI_TOKEN}`,
          'Host': ''
        }
      }
    )

    const parsedAtiCityData: any = await atiCityData.json();


    return res.send({ cities: parsedAtiCityData });

  }
  catch(e) {
    next(e)
  }

}