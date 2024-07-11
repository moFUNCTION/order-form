import { z } from "zod";

export const Assemply_Service_Schema = z.object({
  Options: z.enum(["Turnkey", "Kitted or Consigned", "Combo"], {
    message: "please choose one from the options",
  }),
  BoardType: z.enum(["Single pieces", "Panelized PCBs"], {
    message: "please choose the board type",
  }),
  AssemplySide: z.enum(["Top side", "Bottom side", "Both sides"], {
    message: "please choose the Assemply side",
  }),
  Quantity: z
    .number({ message: "please fill the quantity field" })
    .min(0, { message: "please type a valid quantity" }),
  PayAttention: z.object({
    ContainesSenstiveComponents: z.boolean(),
    AcceptAlternativesMadeInChina: z.boolean(),
    providedText: z.any(),
  }),
});
