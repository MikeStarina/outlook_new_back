import mongoose from "mongoose";

type TServicesStateObj =  {
  name: string;
  url: string;
  description: {__html: string} | string[];
  cardTtitle?: string;
  cardSubtitle?: string;
  pagePosition: 'primary' | 'secondary';
  metadata?: {
      title: string;
      description: string;
      keywords: string;
  }
}

const serviceSchema = new mongoose.Schema<TServicesStateObj>({
  name: { type: String },
  url: { type: String },
  cardTtitle: { type: String },
  cardSubtitle: { type: String },
  pagePosition: { type: String },
  description: {},
  metadata: {
    title: { type: String },
    description: { type: String },
    keywords: { type: String },
  }

});



export default mongoose.model<TServicesStateObj>('services', serviceSchema);