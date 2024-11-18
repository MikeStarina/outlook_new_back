import mongoose from "mongoose";

type TDirectionsObj =      {
    from: string,
    to: string,
    meta_title: string,
    meta_keywords: string,
    meta_description: string,
    content: string,
    type: string,
    slug: string
}

const directionsSchema = new mongoose.Schema<TDirectionsObj>({
    from: {type: String},
    to: {type: String},
    meta_title: {type: String},
    meta_keywords: {type: String},
    meta_description: {type: String},
    content: {type: String},
    type: {type: String},
    slug: {type: String}

});



export default mongoose.model<TDirectionsObj>('directions', directionsSchema);