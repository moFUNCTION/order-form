import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";

export const Quantity = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="9">
      <Text>Quantity:</Text>
      <InputGroup w="240px">
        <Input {...register(name)} type="number" />
        <InputRightAddon>Pieces</InputRightAddon>
      </InputGroup>
    </Flex>
  );
};
