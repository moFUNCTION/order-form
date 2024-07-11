import { Flex, Textarea } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";

export const SpecialRequist = ({ register, name }) => {
  return (
    <Flex gap="9">
      <TextWithPopOver title="Other Special request:">
        We normally will reduce apatures for ICs to make stencil, so if don't
        want to change the apatures, please note it when place the order.
      </TextWithPopOver>
      <Textarea
        {...register(name)}
        maxH="300px"
        placeholder="Fill in any Stencil details to make it as clear as possible for us to understand your requirements. e.g.Multi-level /Step stencil, please specify the region and thickness for step-up/step-down in the gerber."
      />
    </Flex>
  );
};
