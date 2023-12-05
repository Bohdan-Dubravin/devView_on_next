"use server";

import { Tag } from "@/database/tag.model";
import { connectToDb } from "../database/mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDb();

    // const { userId, limit = 3 } = params;
  } catch (error) {}
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDb();
    const tags = await Tag.find();

    // const { userId, limit = 3 } = params;

    return { tags };
  } catch (error) {}
}
