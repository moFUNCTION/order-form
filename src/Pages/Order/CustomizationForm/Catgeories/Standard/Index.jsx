import { Stack } from "@chakra-ui/react";
import { Header } from "./Parts/PCB_Selection/Parts/Header";
import { PCB_Selection_Form } from "./Parts/PCB_Selection/PCB_Selection_Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema/schema";
import { useEffect } from "react";
export default function Index() {
  const formReturnedValues = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      PCB_Specification_Selection: {
        BoardType: {
          type: "Single-pieces",
        },
      },
    },
  });

  return (
    <Stack
      overflow="hidden"
      border="1px"
      borderColor="gray.500"
      w="100%"
      borderRadius="md"
    >
      <PCB_Selection_Form {...formReturnedValues} />
    </Stack>
  );
}
