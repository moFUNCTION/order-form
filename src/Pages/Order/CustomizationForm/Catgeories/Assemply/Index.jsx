import { Accordion, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PCB_Selection_Form } from "./Parts/PCB_Selection/PCB_Selection_Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/schema";
import { Assemply_Service } from "./Parts/Assemply_Service/Assemply_Service";

export default function Index() {
  const formReturnedValues = useForm({
    resolver: zodResolver(schema),
    defaultValues: async () => {
      const formData = localStorage.getItem("assemply-catgeory-form");
      const defaultData = {
        PCB_Specification_Selection: {
          BoardType: {
            type: "Single-pieces",
          },
          Different_design_in_panel: 1,
          Layers: {
            count: 2,
          },
          material: {
            type: "FR-4",
            FR4_TG: "TG 150-160",
            Thermal_conductivity: "1.0W/(m⋅K)",
            Rogers: "Rogers 4003C",
            MCPCB_Structure:
              "Structure of 2L MCPCB Metal base on the bottom side",
            Thermoelectric_separation: false,
          },
          minTrackSpacing: "3/3mil",
          minHoleSize: "0.15mm",
          SolderMaskColor: "Green",
          silkScreenColor: "White",
          UV_printing_Multi_color: "None",
          EdgeConnector: {
            enabled: "No",
            Bevelling: "No",
            type: "HASL with lead",
          },
          Surface_finish: "HASL with lead",
          ViaProcess: "Tenting vias",
          FinisedCopper: "Bare board(0 oz Cu)",
          useCustomizesServicesAndAdvancedOption: false,
          RemoveProduct: "No",
        },
        AssemplyServices: {
          Options: "Turnkey",
          BoardType: "Single pieces",
          AssemplySide: "Top side",
          Quantity: 1,
          PayAttention: {
            ContainesSenstiveComponents: "No",
            AcceptAlternativesMadeInChina: "No",
          },
        },
      };
      if (formData) {
        return Object.assign(defaultData, JSON.parse(formData));
      }
      return defaultData;
    },
  });
  useEffect(() => {
    const save_event = window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "assemply-catgeory-form",
        JSON.stringify(formReturnedValues.getValues())
      );
    });
    return () => {
      window.removeEventListener("beforeunload", save_event);
    };
  }, []);
  return (
    <Accordion
      as={Skeleton}
      isLoaded={!formReturnedValues.formState.isLoading}
      fadeDuration={2}
      allowMultiple={false}
      allowToggle
    >
      <Assemply_Service {...formReturnedValues} />
      <PCB_Selection_Form {...formReturnedValues} />
    </Accordion>
  );
}
