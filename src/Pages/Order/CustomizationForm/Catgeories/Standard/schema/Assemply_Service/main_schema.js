import { z } from "zod";
import { OtherParamsSchema } from "./OtherParamsShema";
import { CustomizeServices } from "./CustomizesServices";

export const AssemblyServiceSchema = z
  .object({
    isEnabled: z.boolean(),
    Options: z
      .enum(["Turnkey", "Kitted or Consigned", "Combo"], {
        message: "Please choose one of the options",
      })
      .optional(),
    BoardType: z
      .enum(["Single pieces", "Panelized PCBs"], {
        message: "Please choose the board type",
      })
      .optional(),
    AssemplySide: z
      .enum(["Top side", "Bottom side", "Both sides"], {
        message: "Please choose the assembly side",
      })
      .optional(),
    Quantity: z
      .number({ message: "Please fill in the quantity field" })
      .min(0, { message: "Please enter a valid quantity" })
      .optional(),
    PayAttention: z
      .object({
        ContainsSensitiveComponents: z
          .enum(["Yes", "No"], {
            message: "Please indicate if there are sensitive components",
          })
          .optional(),
        AcceptAlternativesMadeInChina: z
          .enum(["Yes", "No"], {
            message:
              "Please indicate if alternatives made in China are acceptable",
          })
          .optional(),
        providedText: z.string().optional(),
      })
      .optional(),
    OtherParams: OtherParamsSchema,
    CustomizesServices: CustomizeServices,
  })
  .superRefine((data, ctx) => {
    if (data.isEnabled) {
      const fieldsToValidate = [
        { field: "Options", message: "Please choose one of the options" },
        { field: "BoardType", message: "Please choose the board type" },
        {
          field: "Quantity",
          message: "Please fill in the quantity field",
          validate: (val) => val === undefined || val < 0,
        },
      ];

      fieldsToValidate.forEach(({ field, message, validate }) => {
        const value = data[field];
        if (validate ? validate(value) : !value) {
          ctx.addIssue({
            path: [field],
            message,
          });
        }
      });

      if (!data.PayAttention) {
        ctx.addIssue({
          path: ["PayAttention"],
          message: "Please fill in the PayAttention field",
        });
      } else {
        const payAttentionFields = [
          {
            field: "ContainsSensitiveComponents",
            message: "Please indicate if there are sensitive components",
          },
          {
            field: "AcceptAlternativesMadeInChina",
            message:
              "Please indicate if alternatives made in China are acceptable",
          },
        ];

        payAttentionFields.forEach(({ field, message }) => {
          if (data.PayAttention[field] === undefined) {
            ctx.addIssue({
              path: ["PayAttention", field],
              message,
            });
          }
        });
      }
    }
  });
