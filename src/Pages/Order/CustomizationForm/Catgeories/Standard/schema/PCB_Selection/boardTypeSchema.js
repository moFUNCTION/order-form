import { z } from "zod";

export const boardTypeSchema = z
  .object({
    type: z.enum(["Single-pieces", "Panel-by-Customer", "Panel-by-PCBWay"]),
    // set a spefic validation for it if type === Panel-by-Customer ||  type === Panel by PCBWay
    X_out_Allowance: z.any(),
    // set a spefic validation for it if type === Panel by PCBWay
    Panel_requirements: z.any(),
    Break_away_rail: z.any(),
    Route_Process: z.any(),
  })
  .superRefine((value, ctx) => {
    const {
      type,
      X_out_Allowance,
      Panel_requirements,
      Break_away_rail,
      Route_Process,
    } = value;
    if (type !== "Single-pieces") {
      if (!["Accept", "Not-Accept"].includes(X_out_Allowance)) {
        ctx.addIssue({
          message: `please define if you will choose x out allowance or not`,
          path: ["X_out_Allowance"],
        });
      }
      if (type === "Panel-by-PCBWay") {
        if (!Panel_requirements) {
          ctx.addIssue({
            message: `please fill the pannel requirment`,
            path: ["Panel_requirements"],
          });
        }
        if (typeof Break_away_rail !== "boolean" || !Break_away_rail) {
          ctx.addIssue({
            message: `please define if you will choose Break away rail or not`,
            path: ["X_out_Allowance"],
          });
        }
        if (
          ![
            "Panel-as-V-Scoring",
            "Panel-as-Tab-Route",
            "Panel-as-PCBWay",
            "Both-V-Scoring&Tab-routing",
          ].includes(Route_Process)
        ) {
          ctx.addIssue({
            message: `please choose correct Route process`,
            path: ["X_out_Allowance"],
          });
        }
      }
    }
  });
