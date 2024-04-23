import mongoose from "mongoose";

interface ILead {
  name?: string;
  phone: string;
  from?: string;
  to?: string;
}

const leadSchema = new mongoose.Schema<ILead>({
  name: { type: String },
  phone: { type: String, required: true },
  from: { type: String },
  to: { type: String },
});



export default mongoose.model<ILead>('lead', leadSchema);