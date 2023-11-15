import mongoose from "mongoose";
import { Author } from "./authorSchema";
const { Schema } = mongoose;

export const questionSchema = new Schema({
  title: String,
  questionDetails: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Author,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Question = mongoose.model("Question", questionSchema);
