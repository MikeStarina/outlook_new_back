import { NextFunction, Request, Response } from 'express';
import order from '../models/order';
import { sendMail } from '../utils/mailer';
import ServerError from '../utils/server-error-class';







export const createOrder = async (req: Request, res: Response, next: NextFunction) => {

  //console.log(req.body.data);

  const data = await req.body.data;

  try {

    /*if (!owner_phone || !to || !from) throw ServerError.error400('Некорректные данные в запросе')*/

    //const newOrder = await new order({ owner_phone: phone, to, from });

    //if (!newOrder) throw ServerError.error500('Ошибка сервера при записи в БД')


    //Здесь нужно описать логику запроса к АТИ


    const payload = `Новый заказ. Из: ${data.validatedCityFrom.FullName}, в: ${data.validatedCityTo.FullName}, Расстояние: ${data.orderDistance},
    Тип кузова: ${data.carType.placeholder} (реф: ${data.isRef}),
    Стоимость заказа:${data.price}  телефон ${data.phone} ${data.name}`;
    sendMail({ to: 'info@outlook-logistics.ru', subject: `Новый заказ`, payload});








    //newOrder.save();

    //return await res.send({ id: newOrder._id });

  }
  catch (e) {

    next(e);

  }


}


///test



