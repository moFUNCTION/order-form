import React from "react";
import { Flex, Heading, Radio, Stack, Text } from "@chakra-ui/react";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
export const Options = ({ name, control, setValue }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="9">
      <Text>3 flexible options:</Text>
      <Flex flexWrap="wrap" gap="5">
        {options.map((option, index) => {
          return (
            <ButtonStyled
              w="fit-content"
              h="80px"
              flexGrow="1"
              size="lg"
              gap="3"
              key={index}
              onClick={() => HandleChange(option.label)}
              isActive={selectedValue === option.label}
            >
              <Radio isChecked={selectedValue === option.label} />
              <Stack textAlign="left" gap="1" fontWeight="400">
                <Heading size="sm">{option.label}</Heading>
                <Text maxW="150px" whiteSpace="wrap" fontSize="sm">
                  {option.description}
                </Text>
              </Stack>
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const options = [
  { label: "Turnkey", description: "PCBWay supply parts" },
  {
    label: "Kitted or Consigned",
    description: "Customer supply parts",
  },
  {
    label: "Combo",
    description: "You supply some parts we do the rest",
  },
];
