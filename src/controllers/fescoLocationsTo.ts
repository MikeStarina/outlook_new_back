import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import ServerError from '../utils/server-error-class';
import { FESCO_TOKEN } from '../app';
import dayjs from 'dayjs';





export const fescoLocationsTo = async (req: Request, res: Response, next: NextFunction) => {
  const date = dayjs().add(5, 'day').format('YYYY-MM-DD');
  const { query } = req;
  try {
    if (!query.from) return
    const cities = await fetch(`https://my.fesco.com/api/v2/lk/offers/fit/locations?isPublicRate=2&date=${date}&from=${query.from}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${FESCO_TOKEN}`,
          'Host': ''
        }
    })

    const parsedCities = await cities.json();

    return res.send({parsedCities});
  }
  catch(err) {
    console.log(err)
  }
}