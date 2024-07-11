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

export const CustomizesServices = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="gray.100" p="3">
            <Flex gap="3" alignItems="center" flex="1" textAlign="left">
              <Heading size="sm">
                Customized Services and Advanced Options
              </Heading>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel overflow="unset" as={Stack} gap="5" pb={4}>
          <Text fontSize="sm" color="yellow.600">
            Below options, their cost is not included in the online quotation
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
