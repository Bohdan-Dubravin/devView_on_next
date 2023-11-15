import mongoose from "mongoose";
const { Schema } = mongoose;
const authorSchema = new Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema);
