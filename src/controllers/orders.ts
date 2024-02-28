import { NextFunction, Request, Response } from 'express';
import order from '../models/order';
import { sendMail } from '../utils/mailer';
import ServerError from '../utils/server-error-class';
import { mailGenerator } from '../utils/mailHtmlTemplate';







export const createOrder = async (req: Request, res: Response, next: NextFunction) => {


  const { body } = req;

  try {

    /*if (!owner_phone || !to || !from) throw ServerError.error400('Некорректные данные в запросе')*/

    const newOrder = new order(body);
    //console.log(newOrder);
    if (!newOrder) throw ServerError.error500('Ошибка сервера при записи в БД')


    //const payload = mailGenerator(newOrder);
    const payload = mailGenerator(newOrder);
    sendMail({ to: 'info@outlook-logistics.ru', subject: `Новый заказ`, payload});








    //newOrder.save();

    return res.send({ id: newOrder._id });

  }
  catch (e) {

    next(e);

  }


}


///test



