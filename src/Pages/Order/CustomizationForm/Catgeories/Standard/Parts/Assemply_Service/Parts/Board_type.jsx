import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Board_type = ({ name, control, setValue }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" gap="7">
      <TextWithPopOver title="Board type ">
        We suggest choose to do panel if single PCB qty is more than 20pcs or
        any side of single board is smaller than 50mm.
      </TextWithPopOver>
      <Stack maxW="700px">
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
        <Text color="yellow.600">
          We suggest choose to do panel if single PCB qty is more than 20pcs or
          any side of single board is smaller than 50mm.
        </Text>
      </Stack>
    </Flex>
  );
};
const values = ["Single pieces", "Panelized PCBs"];
