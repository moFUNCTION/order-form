import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import SolderMaskColorImage from "../../../../../../../../Assets/Solder-mask-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
export const SolderMaskColor = () => {
  return (
    <Flex gap="10">
      <TextWithPopOver title="Solder mask">
        Solder mask color refers to the color of the PCB surface. Currently,
        PCBWay provides 9 conventional solder mask colors. If you need pink,
        gray, orange, or transparent, please go to the Advanced PCB page to
        choose.
        <Image src={SolderMaskColorImage} />
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled gap="3" size="md" key={value}>
              <Box
                w="20px"
                h="20px"
                border="1px"
                borderColor="gray.400"
                bgColor={
                  value === "Matte black"
                    ? "black"
                    : value === "Matte green"
                    ? "green"
                    : value === "None"
                    ? "gray.100"
                    : value
                }
              ></Box>
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = [
  "Green",
  "Red",
  "Yellow",
  "Blue",
  "White",
  "Black",
  "Purple",
  "Matte black",
  "Matte green",
  "None",
];
