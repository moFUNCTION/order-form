import { Flex, Input, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import FurnSmdImage4 from "../../../../../../../../../../Assets/04_furn_dip1.png";
import FurnSmdImage5 from "../../../../../../../../../../Assets/04_furn_dip3.png";
export const TotalNumberOfTHTParts = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="3">
      <TextWithPopOver flexShrink="0" title="Number of Through-Hole Parts">
        The total number of THT parts on each board (DIP NO.)
      </TextWithPopOver>
      <Input type="number" {...register(name)} w="200px" objectFit="contain" />
      <Image src={FurnSmdImage4} />
      <Image src={FurnSmdImage5} />
    </Flex>
  );
};
