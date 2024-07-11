import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Electropolishing = ({ setValue, name, control }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex gap="10">
      <TextWithPopOver title="Electropolishing: ">
        Electropolishing, also known as electrochemical surface treatment or
        Electrochemical deburring, results in an optimized surface quality.
        Suitable for medium series.
      </TextWithPopOver>
      <Flex gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
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
