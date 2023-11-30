"use server";

import { connectToDb } from "../database/mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDb();

    // const { userId, limit = 3 } = params;
  } catch (error) {}
}
