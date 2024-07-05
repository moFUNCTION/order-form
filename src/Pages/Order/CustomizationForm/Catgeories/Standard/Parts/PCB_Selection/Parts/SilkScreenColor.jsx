import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import SkillScreenImage from "../../../../../../../../Assets/Silkscreen-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
export const SilkScreenColor = () => {
  return (
    <Flex gap="10">
      <TextWithPopOver title="Silkscreen">
        The silkscreen is a layer of ink trace used to identify the PCB
        components, marks, logos, symbols, and so on. The color is usually
        white. But when the solder mask ink is white, the silkscreen will be
        black.
        <Image src={SkillScreenImage} />
      </TextWithPopOver>
      <Flex gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled gap="3" size="md" key={value}>
              <Box
                w="20px"
                h="20px"
                border="1px"
                borderColor="gray.400"
                bgColor={value === "None" ? "gray.100" : value}
              ></Box>
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["White", "Black", "Yellow", "None"];
