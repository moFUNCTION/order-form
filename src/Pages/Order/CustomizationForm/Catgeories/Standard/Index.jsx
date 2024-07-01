import { Stack } from "@chakra-ui/react";
import { Header } from "./Parts/PCB_Selection/Header";
import { PCB_Selection_Form } from "./Parts/PCB_Selection/PCB_Selection_Form";
import { useForm } from "react-hook-form";
export default function Index() {
  const formReturnedValues = useForm();
  return (
    <Stack
      border="1px"
      borderColor="gray.500"
      w="100%"
      minH="600px"
      borderRadius="md"
    >
      <PCB_Selection_Form />
    </Stack>
  );
}
