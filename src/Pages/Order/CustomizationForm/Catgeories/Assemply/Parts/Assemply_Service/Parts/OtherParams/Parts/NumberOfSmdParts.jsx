import { Flex, Input, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import FurnSmdImage from "../../../../../../../../../../Assets/04_furn_smd2.png";

export const NumberOfSmdParts = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="3">
      <TextWithPopOver flexShrink="0" title="Number of SMD Parts">
        The variety of components in the BOM.
      </TextWithPopOver>
      <Input
        {...register(name)}
        placeholder="Total number"
        w="200px"
        objectFit="contain"
        type="number"
      />
      <Image src={FurnSmdImage} />
    </Flex>
  );
};
