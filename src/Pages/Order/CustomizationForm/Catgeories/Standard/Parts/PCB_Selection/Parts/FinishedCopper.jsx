import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import FinishedCopperImage from "../../../../../../../../Assets/Finished-copper-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
import CopperImage from "../../../../../../../../Assets/copper.png";
export const FinishedCopper = ({ setValue, control, name, errors }) => {
  const HandleChange = (value) => setValue(name, value);
  const FinishedCopperValueSelected = useWatch({ control, name });
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="10">
      <TextWithPopOver flexShrink="0" title="Finished Copper : ">
        The weight in ounces of copper in one square foot of PCB, this option
        will determine the thickness of copper on the outer layers. PCBWay
        provides the thickness of copper on outer layers of 1-13oz.PTH holes or
        vias that are cutted through to create a partial or half hole to form an
        opening into the side of the hole barrel. Generally they are used for
        mounting a PCB to another one.
        <Image mt="3" src={FinishedCopperImage} w="100%" />
      </TextWithPopOver>
      <Flex maxW="700px" alignItems="center" gap="3" flexWrap="wrap">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              size="md"
              key={index}
              isActive={FinishedCopperValueSelected === value}
              flexGrow="1"
            >
              {value}
            </ButtonStyled>
          );
        })}
        <Image src={CopperImage} ml="2" w="100px" objectFit="contain" />
      </Flex>
    </Flex>
  );
};
const values = [
  "Bare board(0 oz Cu)",
  "1 oz Cu",
  "2 oz Cu",
  "3 oz Cu",
  "4 oz Cu",
  "5 oz Cu",
  "6 oz Cu",
  "7 oz Cu",
  "8 oz Cu",
  "9 oz Cu",
  "10 oz Cu",
  "11 oz Cu",
  "12 oz Cu",
  "13 oz Cu",
];
