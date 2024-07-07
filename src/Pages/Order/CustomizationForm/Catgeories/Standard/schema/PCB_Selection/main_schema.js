import { z } from "zod";
import { boardTypeSchema } from "./boardTypeSchema";
import { SizeSchema } from "./TotalSizeSchema";
import { LayersSchema } from "./LayersSchema";
import { MaterialSchema } from "./MaterialSchema";
import { EdgeConnectorSchema } from "./EdgeConnectorSchema";

export const PCB_Selection_Schema = z.object({
  BoardType: boardTypeSchema,
  Different_design_in_panel: z.number({
    message: "please choose how many different design in pannels you want",
    invalid_type_error:
      "please choose how many different design in pannels you want",
    required_error:
      "please choose how many different design in pannels you want",
  }),
  Size: SizeSchema,
  Quantity: z
    .number({
      message: "please choose the quantity",
      invalid_type_error: "please choose the quantity",
      required_error: "please choose the quantity",
    })
    .min(1, { message: "please choose a quantity more than 5" }),
  Layers: LayersSchema,
  material: MaterialSchema,
  minTrackSpacing: z.enum(["3/3mil", "4/4mil", "5/5mil", "6/6mil", "8/8mil"], {
    message: "please choose the min track spacing",
  }),
  minHoleSize: z.enum(
    ["0.15mm", "0.2mm", "0.25mm", "0.3mm", "0.8mm", "1.0mm", "No Drill"],
    { message: "please choose the min Hole size property" }
  ),
  SolderMaskColor: z.enum(
    [
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
    ],
    { message: "please choose the solder mask color" }
  ),
  silkScreenColor: z.enum(["White", "Black", "Yellow", "None"]),
  UV_printing_Multi_color: z.enum([
    "None",
    "Single-sided",
    "Top Single-sided",
    "Bottom Double-sided",
  ]),
  EdgeConnector: EdgeConnectorSchema,
  Surface_finish: z.enum(
    [
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
    ],
    { message: "please choose the surface finish" }
  ),
  ViaProcess: z.enum([
    "Tenting vias",
    "Plugged vias with solder mask",
    "Vias not covered",
  ]),
  FinisedCopper: z.enum([
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
  ]),
  RemoveProduct: z.enum(["No", "Yes (extra+$ 1.5)", "Specify a location"]),
});
