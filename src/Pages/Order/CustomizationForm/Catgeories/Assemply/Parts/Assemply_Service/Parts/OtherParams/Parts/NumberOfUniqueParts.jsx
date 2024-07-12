import { Flex, Input, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import ElecronicsImage from "../../../../../../../../../../Assets/electronic_01 (1).png";

export const NumberOfUniqueParts = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="3">
      <TextWithPopOver flexShrink="0" title="Number of Unique Parts">
        The variety of components in the BOM.
      </TextWithPopOver>
      <Input type="number" {...register(name)} w="200px" objectFit="contain" />
      <Image src={ElecronicsImage} />
    </Flex>
  );
};
