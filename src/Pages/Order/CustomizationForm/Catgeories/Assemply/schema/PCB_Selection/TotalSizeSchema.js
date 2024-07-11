import { z } from "zod";

export const SizeSchema = z.object({
  x: z
    .number({
      required_error: "please enter the size in milli correctly",
      message: "please enter the size in milli correctly",
      invalid_type_error: "please enter the size in milli correctly",
    })
    .min(1, { message: "please enter the size of x field in milli correctly" }),
  y: z
    .number({
      required_error: "please enter the size in milli correctly",
      message: "please enter the size in milli correctly",
      invalid_type_error: "please enter the size in milli correctly",
    })
    .min(1, { message: "please enter the size of y field in milli correctly" }),
});
