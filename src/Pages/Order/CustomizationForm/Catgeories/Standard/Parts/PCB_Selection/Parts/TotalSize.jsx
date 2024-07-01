import React from "react";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import sizePanelImage from "../../../../../../../../Assets/xy-sizepanel.png";
import { MdArrowRight } from "react-icons/md";
export const TotalSize = () => {
  return (
    <Flex alignItems="center" w="100%" gap="10" flexWrap="wrap">
      <TextWithPopOver title="Size (single):" popOverHeader="Content">
        The board size refers to the length and width of the board ordered by
        the customer. If it is a circular board, the length and width are the
        diameter of the circle; If it is a board with irregular shape, the
        length and width are measured according to the largest shape range.
      </TextWithPopOver>
      <Flex alignItems="center" flexWrap="wrap" gap="4">
        <InputGroup w="150px" flexGrow="1">
          <Input bgColor="white" placeholder="length" />
          <InputRightAddon bgColor="gray.300">Y</InputRightAddon>
        </InputGroup>
        <InputGroup w="150px" flexGrow="1">
          <Input bgColor="white" placeholder="width" />
          <InputRightAddon bgColor="gray.300">X</InputRightAddon>
        </InputGroup>
        <Button colorScheme="green">
          inch <MdArrowRight /> mm
        </Button>
        <Image src={sizePanelImage} w="100%" maxW="150px" />
      </Flex>
    </Flex>
  );
};
