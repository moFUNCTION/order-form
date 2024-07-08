import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";

export const MultiLevelStepStencil = ({ onChange, selectedValue }) => {
  return (
    <Flex gap="8">
      <TextWithPopOver title="Multi-level/ Step stencil :">
        Partial STEP-UP Stencil and partial STEP-DOWN Stencil.
      </TextWithPopOver>
      <Flex gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => onChange(value)}
              isActive={selectedValue === value}
              size="md"
              key={index}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["Yes", "No"];
