"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { betsService } from "./instance";

export const placeBetAction = async (formData: FormData) => {
  const amount = formData.get("amount") as string;
  await betsService.createBet(1, 1, Number(amount));

  revalidatePath("/match");
  redirect("/match");
};
