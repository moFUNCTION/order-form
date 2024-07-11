import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { Flex, Select } from "@chakra-ui/react";

export const SolderMask = ({ register, name }) => {
  return (
    <Flex flexGrow="1" gap="4" alignItems="center">
      <TextWithPopOver title="Soldermask:" popOverHeader="content">
        It is coating material used to mask or to protect selected area. When
        ordering 1-layer PCB, please specify whether the solder mask is on top,
        bottom, or both sides. When only one side is chosen for the solder mask,
        the other side will be exposed with the solder mask opening completely.
        Please be sure to select the correct parameters, otherwise, we need to
        contact you for reconfirmation.
      </TextWithPopOver>
      <Select
        cursor="pointer"
        {...register(name, {
          defaultValue: "top-side",
        })}
        bgColor="white"
        w="170px"
        flexGrow="1"
      >
        <option value="top-side">top side</option>
        <option value="bottom-side">bottom side</option>
        <option value="both-sides">both sides</option>
        <option value="none">none</option>
      </Select>
    </Flex>
  );
};
