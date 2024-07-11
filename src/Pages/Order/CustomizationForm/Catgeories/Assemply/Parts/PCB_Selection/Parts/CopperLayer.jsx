import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { Flex, Select } from "@chakra-ui/react";

export const CopperLayer = ({ register, name }) => {
  return (
    <Flex flexGrow="1" gap="4" alignItems="center">
      <TextWithPopOver title="Copper layer" popOverHeader="content">
        When ordering 1-layer PCB, please specify whether the circuit layer is
        on top, bottom, or none. Please be sure to select the correct
        parameters, otherwise, we need to contact you for reconfirmation.
      </TextWithPopOver>
      <Select
        cursor="pointer"
        {...register(name, {
          defaultValue: "top-layer",
        })}
        bgColor="white"
        flexGrow="1"
        w="170px"
      >
        <option value="top-layer">top layer</option>
        <option value="bottom-layer">bottom layer</option>
        <option value="none">none</option>
      </Select>
    </Flex>
  );
};
