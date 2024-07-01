import React from "react";
import { Header } from "./Header";
import {
  Flex,
  Stack,
  Text,
  Image,
  Divider,
  Input,
  Tooltip,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import BoardTypeImage from "../../../../../../../Assets/Board-type.png";
import DesignInPanelImage from "../../../../../../../Assets/1823110858468.png";
import { ButtonStyled } from "../../../../../../../Components/Common/BottonStyled/ButtonStyled";
export const PCB_Selection_Form = () => {
  return (
    <>
      <Header />
      <Stack p="4" bgColor="gray.100">
        <Flex flexWrap="wrap" gap="10">
          <TextWithPopOver title="Board Type" popOverHeader="Content">
            PCBs will be shipped in single pieces or in panel. For bulk assembly
            orders (quantity greater than 30), we recommend shipping in panel,
            which will improve the assembly efficiency. Learn More
            <Image src={BoardTypeImage} w="100%" />
          </TextWithPopOver>
          <Flex flexWrap="wrap" gap="4">
            <ButtonStyled size="md">single pieces</ButtonStyled>
            <ButtonStyled size="md">Panel by Customer</ButtonStyled>
            <ButtonStyled size="md">Panel by PCBWay</ButtonStyled>
          </Flex>
        </Flex>
        <Divider />
        <Flex gap="10" flexWrap="wrap">
          <TextWithPopOver
            title="Different design in panel"
            popOverHeader="Content"
          >
            It means there are different designs in your files separated by
            v-cuts, stamp holes, milling slots or others. We willl charge
            additional panel cost if there are different kinds of PCB designs in
            one Gerber file.
            <Image src={DesignInPanelImage} w="100%" />
          </TextWithPopOver>
          <Flex flexWrap="wrap" gap="4">
            {Array.from({ length: 6 }).map((_, index) => {
              return (
                <ButtonStyled size="md" key={index}>
                  {index + 1}
                </ButtonStyled>
              );
            })}
            <Tooltip label="set a specific size">
              <Input
                placeholder="specific size"
                variant="outline"
                bgColor="white"
                w="140px"
                flexGrow="1"
              />
            </Tooltip>
          </Flex>
        </Flex>
        <Divider />
        <Flex w="100%" gap="10" flexWrap="wrap">
          <TextWithPopOver title="Size (single):" popOverHeader="Content">
            The board size refers to the length and width of the board ordered
            by the customer. If it is a circular board, the length and width are
            the diameter of the circle; If it is a board with irregular shape,
            the length and width are measured according to the largest shape
            range.
          </TextWithPopOver>
          <Flex flexWrap="wrap" gap="4">
            <InputGroup w="150px" flexGrow="1">
              <Input bgColor="white" placeholder="length" />
              <InputRightAddon bgColor="gray.300">Y</InputRightAddon>
            </InputGroup>
            <InputGroup w="150px" flexGrow="1">
              <Input bgColor="white" placeholder="width" />
              <InputRightAddon bgColor="gray.300">X</InputRightAddon>
            </InputGroup>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};
