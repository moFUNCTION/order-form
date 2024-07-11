import {
  Accordion,
  AccordionPanel,
  Button,
  Flex,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { Header } from "./Parts/PCB_Selection/Parts/Header";
import { PCB_Selection_Form } from "./Parts/PCB_Selection/PCB_Selection_Form";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema/schema";
import { useEffect } from "react";
import { SMD_Stecial } from "./Parts/SMD_Stencil/SMD_Stecial";
import { Assemply_Service } from "./Parts/Assemply_Service/Assemply_Service";
export default function Index() {
  const formReturnedValues = useForm({
    resolver: zodResolver(schema),
    defaultValues: async () => {
      const formData = localStorage.getItem("standard-catgeory-form");
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
          CustomizesServices: {
            feuturesSelected: [],
            peelable_soldermask: "None",
            Hole_Copper_Thickness: "None",
            UL_Marking: "None",
            Date_Code: "None",
          },
        },
        SMD_Stecial: {
          isEnabled: false,
          Stencil_type: "Framework",
          Size: "370×470mm",
          Stencil_Side: "Top",
          Thickness: "0.08mm",
          ExistingFiducials: "None",
          Electropolishing: "No",
          Multi_level_Step_stencil: "No",
          Quantity: 0,
        },
        AssemplyServices: {
          isEnabled: false,
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
        "standard-catgeory-form",
        JSON.stringify(formReturnedValues.getValues())
      );
    });
    return () => {
      window.removeEventListener("beforeunload", save_event);
    };
  }, []);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Accordion allowMultiple={false} allowToggle>
      <Stack
        overflow="hidden"
        border="1px"
        borderColor="gray.500"
        w="100%"
        borderRadius="md"
        as={Skeleton}
        isLoaded={!formReturnedValues.formState.isLoading}
        fadeDuration={2}
      >
        <PCB_Selection_Form {...formReturnedValues} />
        <SMD_Stecial {...formReturnedValues} />
        <Assemply_Service {...formReturnedValues} />
        <Flex p="3">
          <Button
            onClick={formReturnedValues.handleSubmit(onSubmit)}
            w="100%"
            maxW="300px"
            ml="auto"
            colorScheme="blue"
          >
            Submit
          </Button>
        </Flex>
      </Stack>
    </Accordion>
  );
}
