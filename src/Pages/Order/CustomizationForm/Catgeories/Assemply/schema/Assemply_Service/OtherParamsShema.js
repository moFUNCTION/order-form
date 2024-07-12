import { z } from "zod";

export const OtherParamsSchema = z.object({
  NumberOfUniqueParts: z
    .number({
      message: "please provide a number for the number of unique parts",
    })
    .min(0, {
      message: "please provide a number for the number of unique parts",
    }),
  NumberOfSmdParts: z
    .number({
      message: "please provide a number for the number of SMD parts",
    })
    .min(0, {
      message: "please provide a number for the number of SMD parts",
    }),
  NumberOfBGAParts: z
    .number({
      message: "please provide a number for the number of BGA parts",
    })
    .min(0, {
      message: "please provide a number for the number of BGA parts",
    }),
  TotalNumberOfTHTParts: z
    .number({
      message: "please provide a number for the number of THT parts",
    })
    .min(0, {
      message: "please provide a number for the number of THT parts",
    }),
});
