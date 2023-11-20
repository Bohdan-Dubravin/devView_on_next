"use server";

import { User } from "@/database/user.model";
import { connectToDb } from "../database/mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import { Question } from "@/database/question.model";

export async function getUser(params: any) {
  try {
    await connectToDb();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDb();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDb();
    const { clerkId, updateData, path } = userData;
    const user = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(userData: DeleteUserParams) {
  try {
    connectToDb();
    const { clerkId } = userData;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    await Question.deleteMany({ author: clerkId });

    return user;
  } catch (error) {
    console.log(error);
  }
}

//  "65567c8757f934230adc6842"
