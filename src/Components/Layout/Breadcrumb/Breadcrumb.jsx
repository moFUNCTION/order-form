import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { useLocation } from "react-router-dom";
export const BreadcrumbLayout = ({ Links }) => {
  const { pathname } = useLocation();
  const [phoneQuery] = useMediaQuery("(max-width: 925px)");
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      gap={phoneQuery && "2"}
      w="100%"
    >
      {Links.map((link, index) => {
        return (
          <BreadcrumbItem
            key={index}
            {...link}
            isLast={index + 1 === Links.length}
            isFirst={index === 0}
            isActive={pathname.split("/").includes(link.href)}
          />
        );
      })}
    </Flex>
  );
};
