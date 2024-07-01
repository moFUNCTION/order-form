import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import BoardTypeImage from "../../../../../../../../Assets/Board-type.png";

export const BoardType = () => {
  return (
    <Flex alignItems="center" flexWrap="wrap" gap="10">
      <TextWithPopOver title="Board Type" popOverHeader="Content">
        PCBs will be shipped in single pieces or in panel. For bulk assembly
        orders (quantity greater than 30), we recommend shipping in panel, which
        will improve the assembly efficiency. Learn More
        <Image src={BoardTypeImage} w="100%" />
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="4">
        <ButtonStyled size="md">single pieces</ButtonStyled>
        <ButtonStyled size="md">Panel by Customer</ButtonStyled>
        <ButtonStyled size="md">Panel by PCBWay</ButtonStyled>
      </Flex>
    </Flex>
  );
};
