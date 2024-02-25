import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import ServerError from '../utils/server-error-class';
import { ATI_TOKEN } from '../app';
import dayjs from 'dayjs';




export const atiCitySearch = async (req: Request, res: Response, next: NextFunction) => {


  const { userCity, direction } = await req.body;

  try {

    const atiCityData = await fetch(`https://api.fesco.com/api/v1/lk/offers/fit/locations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${ATI_TOKEN}`,
          'Host': ''
        }
      }
    )

    const parsedAtiCityData: any = await atiCityData.json();


    return res.send({ cities: parsedAtiCityData, direction });

  }
  catch(e) {
    next(e)
  }

}