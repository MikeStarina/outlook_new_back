import { NextFunction, Request, Response } from 'express';
import order from '../models/order';
import { sendMail } from '../utils/mailer';
import ServerError from '../utils/server-error-class';







export const createOrder = async (req: Request, res: Response, next: NextFunction) => {

  const orderData = await req.body;


  const data = {
    owner_phone: orderData.owner_phone,
    to: orderData.to,
    from: orderData.from,
    car_type: orderData.car_type
  }




  try {

    let newOrder;
    newOrder = await new order(data);






    const payload = '';

    sendMail({ to: 'info@outlook-logistics.ru', subject: `Новый заказ`, payload});








    newOrder.save();

    return await res.send({ id: newOrder._id });

  }
  catch {
    next(ServerError.error400());

  }


}



