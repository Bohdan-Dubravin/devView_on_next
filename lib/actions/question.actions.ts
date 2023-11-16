"use server";

import { Question } from "@/database/question.model";
import { connectToDb } from "../database/mongoose";
import { Tag } from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    connectToDb();
    const { title, content, tags, author, path, question } = params;
    const tagDocuments: string[] = [];
    const newQuestion = await Question.create({ title, content, author });

    tags.array.forEach(async (tag: string) => {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { $question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    });

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    return newQuestion;
  } catch (error) {
    console.log(error);
  }
}
