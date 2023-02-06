import { Request, Response, NextFunction } from "express";
import ServerError from "../utils/server-error-class";
import lead from "../models/lead";
import { sendMail } from "../utils/mailer";






export const createLead = async (req: Request, res: Response, next: NextFunction) => {
  const { name, phone } = await req.body;

  try {
    const newLead = await new lead({ name, phone });

    const payload = `Имя: ${name}, Телефон: ${phone}`;

    sendMail({to: 'info@outlook-logistics.ru', subject: 'Новая заявка на звонок', payload})

    newLead.save()

    return await res.send({ message: 'заявка отправлена'});
  }
  catch {
    next(ServerError.error500());
  }


}