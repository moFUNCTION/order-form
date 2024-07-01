import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import FR_4_Image from "../../../../../../../../Assets/fr4_metarial.jpg";
import AluminiumImage from "../../../../../../../../Assets/Aluminum-Board.jpg";
import RogersImage from "../../../../../../../../Assets/rogers.jpg";
import HDI_Board_Image from "../../../../../../../../Assets/hdi_board.jpg";
import CopperBaseImage from "../../../../../../../../Assets/copper_board.jpg";
export const MaterialType = () => {
  return (
    <Flex alignItems="start" flexWrap="wrap" gap="10">
      <TextWithPopOver title="Material" popOverHeader="Content" mt="2">
        FR4 is the most common arade dielectric material that is used in the
        fabrication of circu boards. Aluminum boards have better heat
        dissipation and thermal transfer than standard FR-4 constructions. The
        copper base boards have a great thermal conductivity better than
        aluminum PCB. Due to its characteristics of low dielectric loss, Rogers
        is often used in high-frequency PCB. If you need other materials, please
        contact your sales representative.
      </TextWithPopOver>
      <Stack>
        <Flex flexWrap="wrap" gap="4">
          {materials.map((material, index) => {
            return (
              <ButtonStyled size="md" key={index} gap="3">
                <Image
                  src={material.image}
                  w="30px"
                  h="30px"
                  objectFit="contain"
                />
                {material.title}
              </ButtonStyled>
            );
          })}
        </Flex>
        <Text color="yellow.700">
          *Material model can be remarked below. HDI is available for 4-layer or
          more.
        </Text>
      </Stack>
    </Flex>
  );
};
const materials = [
  {
    image: FR_4_Image,
    title: "FR-4",
    value: "FR-4",
  },
  {
    image: AluminiumImage,
    title: "Aluminum",
    value: "Aluminum",
  },
  {
    image: RogersImage,
    title: "Rogers",
    value: "Rogers",
  },
  {
    title: "HDI(Buried/blind vias)",
    image: HDI_Board_Image,
    value: "HDI",
  },
  {
    title: "Copper Base",
    image: CopperBaseImage,
    value: "Copper",
  },
];
