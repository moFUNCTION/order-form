import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "./Parts/Header";
import { Options } from "./Parts/Options";
import { Board_type } from "./Parts/Board_type";
import { AssemplySide } from "./Parts/AssemplySide";
import { Quantity } from "./Parts/Quantity";
import { PayAttention } from "./Parts/PayAttention";
import { Detailed_information_of_assembly } from "./Parts/Detailed_information_of_assembly";
import { OtherParams } from "./Parts/OtherParams/OtherParams";
import { CustomizesServices } from "./Parts/CustomizesServices/CustomizesServices";

export const Assemply_Service = ({
  formState: {
    errors: { AssemplyServices: errors },
  },
  register,
  control,
  getValues,
  setValue,
  reset,
  trigger,
}) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => {
        setValue("AssemplyServices.isEnabled", isExpanded);
        return (
          <>
            <AccordionButton>
              <Header isOpened={isExpanded} />
            </AccordionButton>
            <AccordionPanel as={Stack} gap="6" p="4">
              <Options
                setValue={setValue}
                control={control}
                name="AssemplyServices.Options"
              />
              <Board_type
                setValue={setValue}
                control={control}
                name="AssemplyServices.BoardType"
              />
              <AssemplySide
                setValue={setValue}
                control={control}
                name="AssemplyServices.AssemplySide"
              />

              <Quantity register={register} name="AssemplyServices.Quantity" />
              <PayAttention
                name="AssemplyServices.PayAttention"
                setValue={setValue}
                control={control}
                register={register}
              />
              <OtherParams
                name="AssemplyServices.OtherParams"
                register={register}
                control={control}
              />
              <CustomizesServices
                name="AssemplyServices.CustomizesServices"
                register={register}
                control={control}
                setValue={setValue}
              />
              <Detailed_information_of_assembly />

              <Text borderRadius="md" size="sm" p="4" bgColor="blue.50">
                Price does not include PCB fabrication or the cost of
                components, exact quotation will be updated after all the files
                you uploaded pass review or contact Service@pcbway.com for help.
                Need a quick and accurante quote? Need an efficient production?
                Please read SMT Ordering Necessary Files & Info in 1 minute.
                Thank you very much!
              </Text>
            </AccordionPanel>
          </>
        );
      }}
    </AccordionItem>
  );
};
