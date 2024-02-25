import { NextFunction, Request, Response } from 'express';
import order from '../models/order';
import { sendMail } from '../utils/mailer';
import ServerError from '../utils/server-error-class';
import { mailGenerator } from '../utils/mailHtmlTemplate';







export const createOrder = async (req: Request, res: Response, next: NextFunction) => {


  const data = await req.body.data;

  try {

    /*if (!owner_phone || !to || !from) throw ServerError.error400('Некорректные данные в запросе')*/

    const newOrder = new order(data);

    if (!newOrder) throw ServerError.error500('Ошибка сервера при записи в БД')


    //Здесь нужно описать логику запроса к АТИ


    const payload = mailGenerator(newOrder);
    sendMail({ to: 'info@outlook-logistics.ru', subject: `Новый заказ`, payload});








    //newOrder.save();

    //return await res.send({ id: newOrder._id });

  }
  catch (e) {

    next(e);

  }


}


///test



