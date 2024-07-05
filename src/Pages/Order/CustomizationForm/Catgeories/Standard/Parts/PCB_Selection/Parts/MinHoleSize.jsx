import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import HoleImage from "../../../../../../../../Assets/hole.png";
export const MinHoleSize = ({ setValue, control, name }) => {
  return (
    <Flex gap="10" flexWrap="wrap" alignItems="center">
      <TextWithPopOver title="Min hole size">
        Minimum diameter of holes. PCBWay engineers will double-check the min
        hole size.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled size="sm" key={value}>
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
      <Image src={HoleImage} w="50px" />
    </Flex>
  );
};
const values = [
  "0.15mm",
  "0.2mm",
  "0.25mm",
  "0.3mm",
  "0.8mm",
  "1.0mm",
  "No Drill",
];
