import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Flex,
  Select,
  Stack,
  Image,
  Divider,
  Checkbox,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import ElecronicsImage from "../../../../../../../../../Assets/electronic_01 (1).png";
import FurnSmdImage from "../../../../../../../../../Assets/04_furn_smd2.png";
import FurnSmdImage2 from "../../../../../../../../../Assets/04_furn_smd1.png";
import FurnSmdImage3 from "../../../../../../../../../Assets/04_furn_bga.png";
import FurnSmdImage4 from "../../../../../../../../../Assets/04_furn_dip1.png";
import FurnSmdImage5 from "../../../../../../../../../Assets/04_furn_dip3.png";
export const OtherParams = ({ register, name, control, setValue }) => {
  const [isPhoneQuery] = useMediaQuery("(max-width: 700px)");

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="gray.100" p="3">
            <Flex gap="3" alignItems="center" flex="1" textAlign="left">
              <Heading size="sm">Other Parameters</Heading>
              <Text color="yellow.700" fontSize="sm" mr="auto">
                (Fill in to get the exact price, or leave it blank to wait for
                final quote.)
              </Text>
            </Flex>

            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel overflow="unset" as={Stack} gap="5" pb={4}>
          <Text fontSize="sm" color="yellow.600">
            They can be left blank if you're not sure about the number of Unique
            Parts, SMT Parts, BGA/QFP Parts or THT parts.
          </Text>
          <Flex flexWrap="wrap" alignItems="center" gap="3">
            <TextWithPopOver flexShrink="0" title="Number of Unique Parts">
              The variety of components in the BOM.
            </TextWithPopOver>
            <Input w="200px" objectFit="contain" />
            <Image src={ElecronicsImage} />
          </Flex>
          <Flex flexWrap="wrap" alignItems="center" gap="3">
            <TextWithPopOver flexShrink="0" title="Number of SMD Parts">
              The variety of components in the BOM.
            </TextWithPopOver>
            <Input placeholder="Total number" w="200px" objectFit="contain" />
            <Image src={FurnSmdImage} />
          </Flex>
          <Flex flexWrap="wrap" alignItems="center" gap="3">
            <TextWithPopOver flexShrink="0" title="Number of BGA/QFP Parts">
              Number of ICs with more than 16pins and SMD irregular parts with
              more than 10pins on each board. (SOP,QFP,QFN,BGA)
            </TextWithPopOver>
            <Input w="200px" objectFit="contain" />
            <Image src={FurnSmdImage2} />
            <Image src={FurnSmdImage3} />
          </Flex>
          <Flex flexWrap="wrap" alignItems="center" gap="3">
            <TextWithPopOver
              flexShrink="0"
              title="Number of Through-Hole Parts"
            >
              The total number of THT parts on each board (DIP NO.)
            </TextWithPopOver>
            <Input w="200px" objectFit="contain" />
            <Image src={FurnSmdImage4} />
            <Image src={FurnSmdImage5} />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
