import React from "react";
import { Flex, Image, Heading, Button, Checkbox } from "@chakra-ui/react";
import HeaderImage from "../../../../../../../../Assets/smt (1).png";
import { IoIosVideocam } from "react-icons/io";
export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      p="3"
      as="header"
      flexWrap="wrap"
      gap="4"
    >
      <Flex alignItems="center" gap="3">
        <Image src={HeaderImage} w="40px" loading="lazy" decoding="async" />
        <Heading size="sm" as="h3">
          Assembly Service
        </Heading>
      </Flex>
      <Flex flexWrap="wrap" gap="4" alignItems="center">
        <Button gap="2" variant="link" alignItems="center">
          <IoIosVideocam /> How it works (4 steps)
        </Button>
      </Flex>
    </Flex>
  );
};
