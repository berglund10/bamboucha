import { db } from "@/db/instance";
import { createService } from "./service";

export const betsService = createService(db);