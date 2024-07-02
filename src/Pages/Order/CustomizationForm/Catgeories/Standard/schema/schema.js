import { z } from "zod";
import { PCB_Selection_Schema } from "./PCB_Selection/main_schema";
export const schema = z.object({
  PCB_Specification_Selection: PCB_Selection_Schema,
});
