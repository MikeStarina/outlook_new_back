import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import ServerError from '../utils/server-error-class';
import { FESCO_TOKEN } from '../app';
import dayjs from 'dayjs';





export const fescoBids = async (req: Request, res: Response, next: NextFunction) => {

  const date = dayjs().add(5, 'day').format('YYYY-MM-DD');
  const reqData = req.query;

  try {
    const response = await fetch(`https://my.fesco.com/api/v2/lk/offers/fit?date=${date}&from=${reqData.from}&to=${reqData.to}&wte=${reqData.wte}&co=COC&feCode=371117`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${FESCO_TOKEN}`,
          'Host': ''
        }
    })
    const parsedRes = await response.json();

    return res.send(parsedRes);
  }
  catch(err) {
    console.log(err)
  }
}