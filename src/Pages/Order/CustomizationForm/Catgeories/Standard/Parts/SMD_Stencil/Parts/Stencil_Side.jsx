import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "./../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Stencil_Side = ({ name, setValue, control }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" gap="8">
      <TextWithPopOver title="Stencil side: ">
        For Top+Bottom(On Single Stencil) the stencil size should be at least
        twice the PCB size.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              isActive={selectedValue === value}
              size="md"
              key={index}
              flexGrow="1"
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = [
  "Top",
  "Bottom",
  "Top+Bottom(On Single Stencil)",
  "Top & Bottom(On Separate Stencil)",
];
