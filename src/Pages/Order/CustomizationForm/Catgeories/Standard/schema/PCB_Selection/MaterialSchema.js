import { z } from "zod";

export const MaterialSchema = z
  .object({
    type: z.enum(["FR-4", "Aluminum", "Rogers", "HDI", "Copper"], {
      message: "please choose the material type",
    }),
    FR4_TG: z.any(),
    Thermal_conductivity: z.any(),
    Thermoelectric_separation: z.boolean(),
    Rogers: z.any(),
    Thickness: z
      .number({
        message: "please choose the thickness",
        required_error: "please choose the thickness",
        invalid_type_error: "please choose the thickness",
      })
      .max(8, {
        message: "please enter a valid thickness that are from 1.7 to 8",
      }),
    MCPCB_Structure: z.any(),
  })
  .superRefine((value, ctx) => {
    const { type, FR4_TG, Thermal_conductivity, Rogers, MCPCB_Structure } =
      value;
    if (
      ["FR-4", "HDI"].includes(type) &&
      [
        "TG 130-140",
        "TG 150-160",
        "TG 170-180",
        "S1000H TG150",
        "S1000-2M TG170",
      ].includes(FR4_TG)
    ) {
      ctx.addIssue({
        message: "please choose the FR-4 type",
        path: ["FR4_TG"],
      });
    }
    if (["Copper", "Aluminum"].includes(type)) {
      if (
        !["1.0W/(m⋅K)", "1.5W/(m⋅K)", "2.0W/(m⋅K)", "3.0W/(m⋅K)"].includes(
          Thermal_conductivity
        )
      ) {
        ctx.addIssue({
          message: "please choose the Thermal conductivity type",
          path: ["FR4_TG"],
        });
      }
      if (
        ![
          "Structure of 2L MCPCB Metal base on the bottom side",
          "Metal core in the middle",
        ].includes(MCPCB_Structure)
      ) {
        ctx.addIssue({
          message: "please choose the MCPCB Structure  type",
          path: ["MCPCB_Structure"],
        });
      }
    }
    if (
      type === "Rogers" &&
      !["Rogers 4003C", "Rogers 4350B"].includes(Rogers)
    ) {
      ctx.addIssue({
        message: "please choose the Rogers type",
        path: ["FR4_TG"],
      });
    }
  });
