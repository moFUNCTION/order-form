import { z } from "zod";

export const Assemply_Service_Schema = z
  .object({
    isEnabled: z.boolean(),
    Options: z
      .enum(["Turnkey", "Kitted or Consigned", "Combo"], {
        message: "please choose one from the options",
      })
      .optional(),
    BoardType: z
      .enum(["Single pieces", "Panelized PCBs"], {
        message: "please choose the board type",
      })
      .optional(),
    AssemplySide: z
      .enum(["Top side", "Bottom side", "Both sides"], {
        message: "please choose the Assemply side",
      })
      .optional(),
    Quantity: z
      .number({ message: "please fill the quantity field" })
      .min(0, { message: "please type a valid quantity" })
      .optional(),
    PayAttention: z
      .object({
        ContainesSenstiveComponents: z.enum(["Yes", "No"]).optional(),
        AcceptAlternativesMadeInChina: z.enum(["Yes", "No"]).optional(),
        providedText: z.any().optional(),
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isEnabled) {
      if (!data.Options) {
        ctx.addIssue({
          path: ["Options"],
          message: "please choose one from the options",
        });
      }
      if (!data.BoardType) {
        ctx.addIssue({
          path: ["BoardType"],
          message: "please choose the board type",
        });
      }
      if (!data.AssemplySide) {
        ctx.addIssue({
          path: ["AssemplySide"],
          message: "please choose the Assemply side",
        });
      }
      if (data.Quantity === undefined) {
        ctx.addIssue({
          path: ["Quantity"],
          message: "please fill the quantity field",
        });
      } else if (data.Quantity < 0) {
        ctx.addIssue({
          path: ["Quantity"],
          message: "please type a valid quantity",
        });
      }
      if (!data.PayAttention) {
        ctx.addIssue({
          path: ["PayAttention"],
          message: "please fill the PayAttention field",
        });
      } else {
        if (data.PayAttention.ContainesSenstiveComponents === undefined) {
          ctx.addIssue({
            path: ["PayAttention", "ContainesSenstiveComponents"],
            message: "please indicate if there are sensitive components",
          });
        }
        if (data.PayAttention.AcceptAlternativesMadeInChina === undefined) {
          ctx.addIssue({
            path: ["PayAttention", "AcceptAlternativesMadeInChina"],
            message:
              "please indicate if alternatives made in China are acceptable",
          });
        }
      }
    }
  });
