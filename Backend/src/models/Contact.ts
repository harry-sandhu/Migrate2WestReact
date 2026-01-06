import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  country: string;
  message: string;
  agree: boolean;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
    agree: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>("Contact", ContactSchema);
