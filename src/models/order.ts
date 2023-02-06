import mongoose from "mongoose";


export interface IOrder {
    from: String;
    to: string;
    owner_phone: string;
    order_price: number;
    car_type: string;

}







const orderSchema = new mongoose.Schema<IOrder>({
    from: { type: String, required: false},
    to: { type: String, required: false },
    owner_phone: { type: String, required: false },
    order_price: { type: Number, required: false },
    car_type: { type: String },



})



export default mongoose.model('order', orderSchema);



