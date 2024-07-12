import { z } from "zod";
import { boardTypeSchema } from "./boardTypeSchema";
import { SizeSchema } from "./TotalSizeSchema";
import { LayersSchema } from "./LayersSchema";
import { MaterialSchema } from "./MaterialSchema";
import { EdgeConnectorSchema } from "./EdgeConnectorSchema";

export const PCB_Selection_Schema = z
  .object({
    isEnabled: z.boolean(),
    BoardType: boardTypeSchema,
    Different_design_in_panel: z.number().optional(),
    Size: SizeSchema,
    Quantity: z.any(),
    Layers: LayersSchema.optional(),
    material: MaterialSchema.optional(),
    minTrackSpacing: z
      .enum(["3/3mil", "4/4mil", "5/5mil", "6/6mil", "8/8mil"])
      .optional(),
    minHoleSize: z
      .enum([
        "0.15mm",
        "0.2mm",
        "0.25mm",
        "0.3mm",
        "0.8mm",
        "1.0mm",
        "No Drill",
      ])
      .optional(),
    SolderMaskColor: z
      .enum([
        "Green",
        "Red",
        "Yellow",
        "Blue",
        "White",
        "Black",
        "Purple",
        "Matte black",
        "Matte green",
        "None",
      ])
      .optional(),
    silkScreenColor: z.enum(["White", "Black", "Yellow", "None"]).optional(),
    UV_printing_Multi_color: z
      .enum(["None", "Single-sided", "Top Single-sided", "Bottom Double-sided"])
      .optional(),
    EdgeConnector: EdgeConnectorSchema.optional(),
    Surface_finish: z
      .enum([
        "HASL with lead",
        "HASL lead free",
        "Immersion gold(ENIG)",
        "OSP",
        "Hard gold",
        "Immersion silver(Ag)",
        "Immersion tin",
        "HASL lead free + Selective Immersion gold",
        "HASL lead free + Selective Hard gold",
        "Immersion gold + Selective Hard gold",
        "ENEPIG",
        "None(Plain copper)",
      ])
      .optional(),
    ViaProcess: z
      .enum([
        "Tenting vias",
        "Plugged vias with solder mask",
        "Vias not covered",
      ])
      .optional(),
    FinisedCopper: z
      .enum([
        "Bare board(0 oz Cu)",
        "1 oz Cu",
        "2 oz Cu",
        "3 oz Cu",
        "4 oz Cu",
        "5 oz Cu",
        "6 oz Cu",
        "7 oz Cu",
        "8 oz Cu",
        "9 oz Cu",
        "10 oz Cu",
        "11 oz Cu",
        "12 oz Cu",
        "13 oz Cu",
      ])
      .optional(),
    RemoveProduct: z
      .enum(["No", "Yes (extra+$ 1.5)", "Specify a location"])
      .optional(),
    specialRequest: z.any().optional(),
    useCustomizesServicesAndAdvancedOption: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isEnabled === true) {
      const requiredFields = [
        "Different_design_in_panel",
        "Quantity",
        "minTrackSpacing",
        "minHoleSize",
        "SolderMaskColor",
        "silkScreenColor",
        "UV_printing_Multi_color",
        "Surface_finish",
        "ViaProcess",
        "FinisedCopper",
        "RemoveProduct",
      ];

      requiredFields.forEach((field) => {
        if (!data[field]) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [field],
            message: `${field} is required when you enable pcb selection is true`,
          });
        }
      });
      if (!data.Size.x) {
        ctx.addIssue({
          message: "please fill the x field",
          path: ["Size.x"],
        });
      }
      if (!data.Size.y) {
        ctx.addIssue({
          message: "please fill the y field",
          path: ["Size.y"],
        });
      }
    }
  });
