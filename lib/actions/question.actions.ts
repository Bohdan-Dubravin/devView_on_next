"use server";

import { connectToDb } from "../database/mongoose";

export const createQuestion = async () => {
  try {
    connectToDb();
  } catch (error) {}
};
