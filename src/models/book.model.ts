import mongoose from "mongoose";

export interface BookDocument extends mongoose.Document {
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  stock: number;
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true },
  stock: { type: Number, required: true },
});

export default mongoose.model<BookDocument>("Book", bookSchema);
