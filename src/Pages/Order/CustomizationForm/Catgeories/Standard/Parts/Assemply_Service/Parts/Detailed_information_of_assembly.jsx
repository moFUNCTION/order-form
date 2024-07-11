import { Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";

export const Detailed_information_of_assembly = () => {
  return (
    <Flex flexWrap="wrap" gap="3">
      <Text>Detailed information of assembly:</Text>
      <Textarea
        w="fit-content"
        flexGrow="1"
        minH="160px"
        placeholder="Please fill in detailed technical information about the PCB assembly, other shell assembly, cable soldering, fuse wires, rivets, etc."
      />
    </Flex>
  );
};
