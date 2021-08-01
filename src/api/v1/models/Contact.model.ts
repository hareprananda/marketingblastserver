import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
  media: { type: String, required: true },
  contacted: { type: Boolean, required: true },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  status: [statusSchema],
});

const ContactModel = mongoose.model("contact", contactSchema);

export default ContactModel;
