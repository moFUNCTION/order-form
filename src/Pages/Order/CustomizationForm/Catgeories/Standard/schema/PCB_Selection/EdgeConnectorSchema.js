import { z } from "zod";

export const EdgeConnectorSchema = z
  .object({
    enabled: z.enum(["Yes", "No"]),
    Bevelling: z.enum(["No", "Yes (20°)", "Yes (30°)", "Yes (45°)"]),
    type: z.any(),
  })
  .superRefine((value, ctx) => {
    const types = [
      "HASL with lead",
      "HASL lead free",
      "Immersion gold(ENIG)",
      "OSP",
      "Hard gold",
      "Immersion silver(Ag)",
      "Immersion tin",
      "ENEPIG",
      "None(Plain copper)",
    ];
    const { enabled, type } = value;
    if (enabled === "Yes" && !types.includes(type)) {
      ctx.addIssue({
        message: "please choose the edge connector type",
        path: ["type"],
      });
    }
  });
