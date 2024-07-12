import { z } from "zod";

export const schema = z.object({
  username: z
    .string({ message: "please fill the username field" })
    .min(4, { message: "the username must me more thatn 4 characters" }),
  email: z
    .string({ message: "please fill the email field" })
    .email({ message: "please write a valid email adress" }),
});
