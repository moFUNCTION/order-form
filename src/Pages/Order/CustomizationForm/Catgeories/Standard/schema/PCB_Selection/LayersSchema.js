import { z } from "zod";

export const LayersSchema = z
  .object({
    count: z.enum([1, 2, 4, 6, 8, 10, 12, 14], {
      message: "please choose the layers count",
    }),
    CopperLayer: z.any(),
    Soldermask: z.any(),
    Silkscreen: z.any(),
  })
  .superRefine((value, ctx) => {
    const { count, CopperLayer, Soldermask, Silkscreen } = value;
    if (count === 1) {
      if (!["top-layer", "bottom-layer", "none"].includes(CopperLayer)) {
        ctx.addIssue({
          message: "please choose an option in the copper layer field ",
          path: ["CopperLayer"],
        });
      }
      if (
        !["top-side", "bottom-side", "both-sides", "none"].includes(Soldermask)
      ) {
        ctx.addIssue({
          message: "please choose an option in the Soldermask field ",
          path: ["Soldermask"],
        });
      }
      if (
        !["top-side", "bottom-side", "both-sides", "none"].includes(Silkscreen)
      ) {
        ctx.addIssue({
          message: "please choose an option in the Silkscreen field ",
          path: ["Silkscreen"],
        });
      }
    }
  });
