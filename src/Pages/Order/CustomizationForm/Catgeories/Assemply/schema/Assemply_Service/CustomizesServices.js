import { z } from "zod";

export const CustomizeServices = z.object({
  DepanelBoards: z.enum(["No", "Yes"]),
  FunctionTest: z.enum(["No", "Yes"]),
  ConformalCoating: z.enum(["No", "Yes"]),
  FirmwareLoading: z.enum(["No", "Yes"]),
  PressfitParts: z.enum(["No", "Yes"]),
  BoxBuildAssembly: z.enum(["No", "Yes"]),
  CableWireHarnessAssembly: z.enum(["No", "Yes"]),
  SMTCustompackaging: z.enum(["No", "Yes"]),
  XrayTest: z
    .number()
    .optional()
    .refine(
      (val) => {
        if (val === "") return true;
        const num = Number(val);
        return !isNaN(num) && num >= 0 && num <= 99999;
      },
      { message: "XrayTest must be a number between 0 and 99999" }
    ),
});
