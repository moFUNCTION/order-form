import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
export const AssemplySide = ({ name, control, setValue }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" gap="8" alignItems="center">
      <TextWithPopOver title="Assembly side(s): ">
        Are the parts mounted on one side only or both sides?
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              key={index}
              onClick={() => HandleChange(value)}
              isActive={selectedValue === value}
              size="md"
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["Top side", "Bottom side", "Both sides"];
