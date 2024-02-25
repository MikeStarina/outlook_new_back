import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import orderRouter from './routes/orders';
import leadRouter from './routes/lead';
import atiCitySearchRouter from './routes/atiCitySearch';
import atiDistanceCalcRouter from './routes/atiDistanceCalc';
import fescoCitiesRouter from './routes/fescoCities';
import fescoBidsRouter from './routes/fescoBids';
import { errorHandler } from './middlewares/errors';
import { requestLogger, errorLogger } from './middlewares/logger';
import cors from 'cors';
import dotenv from 'dotenv';
//import dayjs from 'dayjs';



const ENV = dotenv.config();


const corsOptions = {
    origin:  ['https://api.outlook-logistics.ru',
    'http://api.outlook-logistics.ru',
    'https://outlook-logistics.ru',
    'http://outlook-logistics.ru',
    'https://www.outlook-logistics.ru',
    'http://www.outlook-logistics.ru',
    'http://localhost:3000',
    //'http://localhost:1337',
    //'http://95.163.236.246:1337',
    //'https://95.163.236.246:1337',
  ],
    optionsSuccessStatus: 200,
  }

//const date = dayjs().add(5, 'day').format('YYYY-MM-DD');
//console.log(date);
//console.log(typeof date);

export const PORT = parseInt(ENV.parsed!.PORT);
export const DBURL = ENV.parsed!.DBURL.toString();
export const ATI_TOKEN = ENV.parsed!.ATI_TOKEN.toString();
export const DISTANCE_CALC_TOKEN = ENV.parsed!.DISTANCE_CALC_TOKEN.toString();
export const FESCO_TOKEN = ENV.parsed!.FESCO_TOKEN.toString();


//console.log(DBURL);



const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

mongoose.set('strictQuery', true);
mongoose.connect(DBURL, { dbName: 'outlook' });



app.use(requestLogger);


app.use('/api/orders', orderRouter);
app.use('/api/leads', leadRouter);
app.use('/api/ati_city_search', atiCitySearchRouter);
app.use('/api/ati_distance_calculator', atiDistanceCalcRouter);
app.use('/api/fescoCities', fescoCitiesRouter);
app.use('/api/fescoBids', fescoBidsRouter);




app.use(errorLogger);
app.use(errorHandler)

app.listen(+PORT, () => {
    console.log(`App listening on port ${PORT}`)
});


