import { z } from "zod";

export const OtherParamsSchema = z.object({
  NumberOfUniqueParts: z
    .number({
      message: "please provide a number for the number of unique parts",
    })
    .min(1, {
      message: "please provide a number for the number of unique parts",
    }),
  NumberOfSmdParts: z
    .number({
      message: "please provide a number for the number of unique parts",
    })
    .min(1, {
      message: "please provide a number for the number of unique parts",
    }),
  NumberOfBGAParts: z
    .number({
      message: "please provide a number for the number of unique parts",
    })
    .min(1, {
      message: "please provide a number for the number of unique parts",
    }),
  TotalNumberOfTHTParts: z
    .number({
      message: "please provide a number for the number of unique parts",
    })
    .min(1, {
      message: "please provide a number for the number of unique parts",
    }),
});
