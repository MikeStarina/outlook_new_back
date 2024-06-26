import { Request, Response, NextFunction } from "express";
import ServerError from "../utils/server-error-class";
import lead from "../models/lead";
import { sendMail } from "../utils/mailer";






export const createLead = async (req: Request, res: Response, next: NextFunction) => {

  const { name, phone, from, to } = await req.body;


  try {

    //if (!name || !phone) throw ServerError.error400('Некорректные данные в запросе')
    const newLead = new lead({ name, phone, from, to});
    if (!newLead) throw ServerError.error500('Создать новый лид в базе не удалось')

    const payload = `Имя: ${name ? name : ''}, Телефон: ${phone}, Откуда: ${from ? from : ''}, Куда: ${to ? to : ''}`;
    await sendMail({to: 'info@outlook-logistics.ru', subject: 'Новая заявка на звонок', payload})

    await newLead.save()

    return res.status(200).send({ message: 'заявка отправлена'});


  }
  catch (e) {
    next(e);
  }


}