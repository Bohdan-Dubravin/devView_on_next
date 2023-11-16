"use server";

import { User } from "@/database/user.model";
import { connectToDb } from "../database/mongoose";

export async function getUser(params: any) {
  try {
    connectToDb();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}

//  "65567c8757f934230adc6842"
