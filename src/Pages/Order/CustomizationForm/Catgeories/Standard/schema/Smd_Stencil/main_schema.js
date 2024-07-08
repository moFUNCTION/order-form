import { z } from "zod";

export const SMD_Stecial_schema = z.object({
  isEnabled: z.boolean(),
  Stencil_type: z.enum(["Framework", "Non-framework"]),
  Size: z.enum([
    "370×470mm",
    "420×520mm",
    "450×550mm",
    "584×584mm",
    "550×650mm",
    "736×736mm",
    "400×600mm",
    "400×800mm",
    "400×1000mm",
    "500×800mm",
    "400×1200mm",
    "400×1400mm",
    "500×1200mm",
    "500×1400mm",
    "190×290mm",
    "550×550mm",
  ]),
  Stencil_Side: z.enum([
    "Top",
    "Bottom",
    "Top+Bottom(On Single Stencil)",
    "Top & Bottom(On Separate Stencil)",
  ]),
  Quantity: z
    .number()
    .min(0, { message: "please choose a valid quantity" })
    .optional(),
  Thickness: z.enum([
    "0.08mm",
    "0.10mm",
    "0.12mm",
    "0.15mm",
    "0.2mm",
    "0.25mm",
    "0.3mm",
  ]),
  ExistingFiducials: z.enum(["None", "half lasered", "lasered through"]),
  Electropolishing: z.enum(["Yes", "No"]),
  Other_Special_Request: z.string().optional(),
});
