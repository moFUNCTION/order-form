import { z } from "zod";

export const SizeSchema = z.object({
  x: z.any(),
  y: z.any(),
});
