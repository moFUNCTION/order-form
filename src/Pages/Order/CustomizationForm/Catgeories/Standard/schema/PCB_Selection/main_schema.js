import { z } from "zod";
import { boardTypeSchema } from "./boardTypeSchema";

export const PCB_Selection_Schema = z.object({
  BoardType: boardTypeSchema,
});
