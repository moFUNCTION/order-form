import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { Flex, Select } from "@chakra-ui/react";

export const Silkscreen = () => {
  return (
    <Flex flexGrow="1" gap="4" alignItems="center">
      <TextWithPopOver title=" Silkscreen:" popOverHeader="content">
        The silkscreen is a layer of ink trace used to identify the PCB
        components, marks, logos, symbols, and so on.When ordering 1-layer PCB,
        please specify which layer the silkscreen is on.
      </TextWithPopOver>
      <Select bgColor="white" w="170px" flexGrow="1">
        <option value="top-side">top side</option>
        <option value="bottom-side">bottom side</option>
        <option value="both-sides">both sides</option>
        <option value="none">none</option>
      </Select>
    </Flex>
  );
};
