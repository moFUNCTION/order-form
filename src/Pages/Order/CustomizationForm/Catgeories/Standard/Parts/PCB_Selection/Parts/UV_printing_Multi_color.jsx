import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const UV_printing_Multi_color = ({
  setValue,
  name,
  control,
  errors,
}) => {
  const valueSelected = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  return (
    <Flex gap="10" alignItems="center">
      <TextWithPopOver title="UV printing Multi-color(beta)">
        Prerequisites for Ordering: 1. Maximum size for a single piece:
        270*470MM; 2. Selection of soldermask color. Design Specifications: 1.
        Avoid placing colored characters in areas with solder mask openings,
        such as surface-mount pads or through-hole pads. 2. Colored characters
        can be provided through reference pictures and reference alignment maps
        (for convenient alignment with PCB) without the necessity of designing
        them in Gerber files. However, if you opt to include colored characters
        in the Gerber files, ensure they are placed on the silkscreen layer and
        annotated with colors. * Please send the images you want to print on the
        PCB in the following formats: AI, PDF, JPEG, PNG, TIFF, etc., and
        indicate your desired printing location on the board.
      </TextWithPopOver>
      <Stack>
        <Flex gap="3">
          {values.map((value) => {
            return (
              <ButtonStyled
                isActive={value === valueSelected}
                onClick={() => HandleChange(value)}
                size="md"
                key={value}
              >
                {value}
              </ButtonStyled>
            );
          })}
        </Flex>
        <Text fontSize="sm" color="yellow.600">
          *The uploaded PCB file should contain color renderings, learn more
        </Text>
      </Stack>
    </Flex>
  );
};
const values = [
  "None",
  "Single-sided",
  "Top Single-sided",
  "Bottom Double-sided",
];
