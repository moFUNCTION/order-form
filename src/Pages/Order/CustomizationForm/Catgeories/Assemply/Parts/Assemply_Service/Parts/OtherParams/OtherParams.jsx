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
  Stack,
} from "@chakra-ui/react";

import { NumberOfUniqueParts } from "./Parts/NumberOfUniqueParts";
import { NumberOfSmdParts } from "./Parts/NumberOfSmdParts";
import { NumberOfBGAParts } from "./Parts/NumberOfBGAParts";
import { TotalNumberOfTHTParts } from "./Parts/TotalNumberOfTHTParts";
export const OtherParams = ({ register, name, control, setValue }) => {
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
          <NumberOfUniqueParts
            register={register}
            name={`${name}.NumberOfUniqueParts`}
          />
          <NumberOfSmdParts
            register={register}
            name={`${name}.NumberOfSmdParts`}
          />
          <NumberOfBGAParts
            register={register}
            name={`${name}.NumberOfBGAParts`}
          />
          <TotalNumberOfTHTParts
            register={register}
            name={`${name}.TotalNumberOfTHTParts`}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
