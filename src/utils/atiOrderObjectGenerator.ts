import { IOrder } from "models/order";

export const atiOrderObjectGenerator = (order: any) => {
      const cargoData = {
        cargo_application: {
        external_id: order._id,
        route: {
          loading: {
            location: {
              type: 'manual',
              city_id: order.validatedCityFrom.CityId,
            },
            dates: {
              type: 'ready'
            },
            cargos: [{
              id: 1,
              name: 'ТНП',
              weight: {
                type: 'tons',
                quantity: 0   //согласно грузоподьемности машины
              },
              volume: {
                quantity: 0 // взять из параметров на сайте
              }
            }],
          },
          unloading: {
            location: {
              type: 'manual',
              city_id: order.validatedCityTo.CityId,
            },
          },
          truck: {
            trucks_count: 1,
            load_type: 'dont-care',
            body_types: [], // 30000 (все закрытые плюс изотерм) или 50000 если реф
          },
        },
        payment: {
          type: 'rate-request',
          hide_counter_offers: true,
          rate_with_vat_available: true,
          rate_without_vat_available: true,
          cash_available: false,
        },
        paid_features: {
          stealth: {
            list_id: '', //ждем ответ ати
          }
        },
        contacts: [3, 5],
        }
      }


      return order;
}