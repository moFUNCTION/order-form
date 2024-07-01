import React from "react";
import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import HeaderImage from "../../../../../../../Assets/pcb.png";
import { IoIosVideocam } from "react-icons/io";
import { MdDownload } from "react-icons/md";
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
          PCB Specification Selection
        </Heading>
      </Flex>
      <Flex flexWrap="wrap" gap="4" alignItems="center">
        <Button gap="2" variant="link" alignItems="center">
          <IoIosVideocam /> How it works (3 steps)
        </Button>
        <Button gap="2" variant="link" alignItems="center">
          <MdDownload /> {"Quick-order PCB >>"}
        </Button>
      </Flex>
    </Flex>
  );
};
