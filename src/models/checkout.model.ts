import mongoose from "mongoose";
import { UserDocument } from "@/models/user.model";
import { BookDocument } from "@/models/book.model";

interface CheckoutDocument extends mongoose.Document {
  user: UserDocument["_id"];
  book: BookDocument["_id"];
  checkoutDate: Date;
  returnDate?: Date;
  status: string;
}

const checkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  checkoutDate: { type: Date, required: true, default: Date.now },
  returnDate: { type: Date },
  status: { type: String, required: true },
});

export default mongoose.model<CheckoutDocument>("Checkout", checkoutSchema);
