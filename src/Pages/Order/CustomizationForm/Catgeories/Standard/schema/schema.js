import { z } from "zod";
import { PCB_Selection_Schema } from "./PCB_Selection/main_schema";
import { SMD_Stecial_schema } from "./Smd_Stencil/main_schema";
import { Assemply_Service_Schema } from "./Assemply_Service/main_schema";
export const schema = z.object({
  PCB_Specification_Selection: PCB_Selection_Schema,
  SMD_Stecial: SMD_Stecial_schema,
  AssemplyServices: Assemply_Service_Schema,
});
