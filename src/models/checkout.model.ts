import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  checkoutDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, required: true },
});

export default mongoose.model("Checkout", checkoutSchema);
