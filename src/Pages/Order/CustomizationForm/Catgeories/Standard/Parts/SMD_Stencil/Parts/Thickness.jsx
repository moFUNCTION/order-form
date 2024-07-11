import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "./../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Thickness = ({ setValue, name, control }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" gap="9">
      <TextWithPopOver title="Thickness: ">
        The stencil thickness is chosen according to the component sizes.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              size="md"
              key={index}
              isActive={selectedValue === value}
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
  "0.08mm",
  "0.10mm",
  "0.12mm",
  "0.15mm",
  "0.2mm",
  "0.25mm",
  "0.3mm",
];
