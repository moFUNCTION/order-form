import { Flex, Input, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import FurnSmdImage2 from "../../../../../../../../../../Assets/04_furn_smd1.png";
import FurnSmdImage3 from "../../../../../../../../../../Assets/04_furn_bga.png";
export const NumberOfBGAParts = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="3">
      <TextWithPopOver flexShrink="0" title="Number of BGA/QFP Parts">
        Number of ICs with more than 16pins and SMD irregular parts with more
        than 10pins on each board. (SOP,QFP,QFN,BGA)
      </TextWithPopOver>
      <Input type="number" {...register(name)} w="200px" objectFit="contain" />
      <Image src={FurnSmdImage2} />
      <Image src={FurnSmdImage3} />
    </Flex>
  );
};
