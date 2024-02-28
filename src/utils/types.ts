export interface ICity {
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


export interface ICarType {

  name: string,
  placeholder: string,
  options: {
    ref: boolean
  },
  regularBids: { bid: number, bidRef?: number },
  intraregionBids: { bid: number, bidRef?: number },
  intraCityBids: { price: number, priceRef?: number }

}


export type TFescoCarTypes =  {
  wte_uid: number,
  ct_code: string,
  wte_description: string,
  ct_comment: string,
  text: string,
  custom_text: string,
  custom_text_latin: string
}


export type TFescoLocations = {
  country_code: number,
  country_name: string,
  country_name_latin: string,
  country_short_name: string,
  loc_code: null,
  loc_latitude: number,
  loc_longitude: number,
  loc_lt_code: string,
  loc_name: string,
  loc_name_latin: string,
  loc_softship_code: string,
  loc_uid: number,
  text: string,
  text_latin: string,
}