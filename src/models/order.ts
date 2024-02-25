import mongoose from "mongoose";


interface ICIty {
    Id2: string,
    CityId: number,
    RegionId: number,
    CountryId: number,
    FullName: string,
    ShortName: string,
    FullNameEng: string,
    ShortNameEng: string,
    IsRegionalCenter: boolean,
    CitySize: number,
    FiasId: string,
    Longitude: number,
    Latitude: number,
    CityName: string,
    RegionName: string,
    CountryName: string,
    CityNameEng: string,
    RegionNameEng: string,
    CountryNameEng: string,
    CountryCodeName: string,
    direction: 'to' | 'from',
}


interface ICarType {

    name: string,
    placeholder: string,
    options: {
      ref: boolean
    },
    regularBids: { bid: number, bidRef?: number },
    intraregionBids: { bid: number, bidRef?: number },
    intraCityBids: { price: number, priceRef?: number }

}


export interface IOrder {
    from: String;
    to: string;
    phone: string;
    name: string;
    isRef: boolean;
    price: number;
    validatedCityTo: ICIty;
    validatedCityFrom: ICIty;
    orderDistance: number,
    distanceType: 'regular' | 'intracity' | 'intraregion',
    carType: ICarType
}







const orderSchema = new mongoose.Schema<IOrder>({
    from: { type: String, required: true},
    to: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String},
    isRef: { type: Boolean },
    price: { type: Number, required: true },
    validatedCityTo: { type: Object },
    validatedCityFrom: { type: Object },
    orderDistance: { type: Number },
    distanceType: { type: String },
    carType: { type: Object },
})



export default mongoose.model('order', orderSchema);

/*
{
  from: 'Москва',
  to: 'Пермь',
  phone: '89214192254',
  name: 'Михаил Старина',
  isRef: false,
  price: 108025,
  validatedCityTo: {
    Id2: 'ea331511-9812-e411-8e11-00259038ec34',
    CityId: 182,
    RegionId: 3,
    CountryId: 1,
    FullName: 'Пермь, Пермский край, Россия',
    ShortName: 'Пермь',
    FullNameEng: 'Perm, Perm Krai, Russia',
    ShortNameEng: 'Perm',
    IsRegionalCenter: true,
    CitySize: 6,
    FiasId: 'a309e4ce-2f36-4106-b1ca-53e0f48a6d95',
    Longitude: 56.246723,
    Latitude: 58.014965,
    CityName: 'Пермь',
    RegionName: 'Пермский край',
    CountryName: 'Россия',
    CityNameEng: 'Perm',
    RegionNameEng: 'Perm Krai',
    CountryNameEng: 'Russia',
    CountryCodeName: 'RUS',
    direction: 'to'
  },
  validatedCityFrom: {
    Id2: '21411511-9812-e411-8e11-00259038ec34',
    CityId: 3611,
    RegionId: 151,
    CountryId: 1,
    FullName: 'Москва, Москва (регион), Россия',
    ShortName: 'Москва',
    FullNameEng: 'Moscow, Moscow (region), Russia',
    ShortNameEng: 'Moscow',
    IsRegionalCenter: true,
    CitySize: 6,
    FiasId: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
    Longitude: 37.617494,
    Latitude: 55.750446,
    CityName: 'Москва',
    RegionName: 'Москва (регион)',
    CountryName: 'Россия',
    CityNameEng: 'Moscow',
    RegionNameEng: 'Moscow (region)',
    CountryNameEng: 'Russia',
    CountryCodeName: 'RUS',
    direction: 'from'
  },
  orderDistance: 1427,
  distanceType: 'regular',
  carType: {
    name: '5000',
    placeholder: '5 Т',
    options: { ref: true },
    regularBids: { bid: 60, bidRef: 65 },
    intraregionBids: { bid: 60, bidRef: 65 },
    intraCityBids: { price: 8500, priceRef: 9500 }
  }
}

*/




