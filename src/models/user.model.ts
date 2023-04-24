import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "student" | "librarian";
}

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "librarian"], required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

export default mongoose.model<UserDocument>("User", userSchema);
