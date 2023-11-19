"use server";

import { IQuestion, Question } from "@/database/question.model";
import { connectToDb } from "../database/mongoose";
import { Tag } from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import { User } from "@/database/user.model";

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDb();
    const { title, content, tags, author } = params;
    const newQuestion = await Question.create({ title, content, author });

    const tagDocuments = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: newQuestion._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(newQuestion._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (error) {
    console.log(error);
  }
}

// interface TypQuestions {
//   questions: IQuestion[];
// }

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDb();
    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({
        path: "author",
        model: User,
      })
      .lean();

    return { questions };
  } catch (error) {
    console.log(error);
  }
}
