import mongoose from "mongoose";

type TItem =
{
      slug: string;
      serviceType: string;
      name: string;
      title: string;
      pagePosition?: 'primary' | 'secondary';
      cardTitle?: string;
      cardSubtitle?: string;
      image: string;
      description?: string[] | {__html: string};
      truck_params?: {
        size?: string;
        weight?: string;
        volume?: string;
        capacity?: string;
      };
      metaTitle: string;
      metaDescription: string;
      metaKeywords: string;
    }
;

const featuresSchema = new mongoose.Schema<TItem>({
  name: { type: String },
  slug: { type: String },
  serviceType: { type: String },
  title: { type: String },
  pagePosition: { type: String },
  cardSubtitle: { type: String },
  cardTitle: { type: String },
  image: { type: String },
  description: {},
  truck_params: {
    size: { type: String },
    weight: { type: String },
    volume: { type: String },
    capacity: { type: String },
  },

  metaTitle: { type: String },
  metaDescription: { type: String },
  metaKeywords: { type: String },

});



export default mongoose.model<TItem>('features', featuresSchema);