import { Skeleton, Stack } from "@chakra-ui/react";
import { Header } from "./Parts/PCB_Selection/Parts/Header";
import { PCB_Selection_Form } from "./Parts/PCB_Selection/PCB_Selection_Form";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema/schema";
import { useEffect } from "react";
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
          material: {
            type: "FR-4",
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
  return (
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
    </Stack>
  );
}
