import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import ServerError from '../utils/server-error-class';
import { DISTANCE_CALC_TOKEN } from '../app';
import { xmlToInt } from '../utils/xmlResponseToInteger';





export const atiDistanceCalc = async (req: Request, res: Response, next: NextFunction) => {

  const { from, to } = req.body;
  console.log(req.body)

  try {

    const calcData = await fetch("http://ati.su/WebServices/RoutesService/RoutesService.asmx/GetDistance", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "upgrade-insecure-requests": "1",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "credentials": "omit"
      },

      "body": `ticket=${DISTANCE_CALC_TOKEN}&cities=${from.CityId};${to.CityId}&useFerries=false&bestTime=false&winterRoad=false&includeOtherCountries=false&exclCities=&exclRegions=&exclCountries=&speeds=&delays=`,
      "method": "POST",
    }).then(res => res.text());


    console.log(calcData);
    console.log(xmlToInt(calcData));

    return res.send({distance: xmlToInt(calcData)})

  }
  catch(e) {
    next(e)
  }

}


