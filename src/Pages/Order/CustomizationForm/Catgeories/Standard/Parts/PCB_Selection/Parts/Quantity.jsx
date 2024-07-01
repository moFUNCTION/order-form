import React from "react";
import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
export const Quantity = () => {
  return (
    <Flex alignItems="center" w="100%" gap="10" flexWrap="wrap">
      <TextWithPopOver title="Quantity (single): " popOverHeader="Content">
        Please choose the number of single pieces you need. For standard PCB,
        the starting quantity is 5 pieces.
      </TextWithPopOver>
      <Flex alignItems="center" flexWrap="wrap" gap="4">
        <InputGroup w="150px" flexGrow="1">
          <Input bgColor="white" placeholder="quantity" />
          <InputRightAddon bgColor="gray.300">pcs</InputRightAddon>
        </InputGroup>
      </Flex>
    </Flex>
  );
};
