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
import { Link } from "react-router-dom";
export const BreadcrumbItem = ({ isLast, isFirst, title, href, isActive }) => {
  const [phoneQuery] = useMediaQuery("(max-width: 925px)");
  return (
    <Stack
      w="300px"
      flexGrow="1"
      bgColor={isActive ? "#ffe0cc" : "gray.100"}
      p="2"
      alignItems="center"
      pos="relative"
      _before={
        !phoneQuery && {
          content: `""`,
          pos: "absolute",
          left: "-28px",
          bgColor: !isFirst && (isActive ? "#ffe0cc" : "gray.100"),
          w: "30px",
          h: "100%",
          top: "0",
        }
      }
      as={Link}
      to={!isActive && href}
    >
      <Text size="md">{title}</Text>
      {!isLast && !phoneQuery && (
        <Stack
          alignItems="center"
          justifyContent="center"
          pos="absolute"
          right="0"
          top="50%"
          zIndex="10"
          sx={{
            translate: "0% -50%",
          }}
          w="fit-content"
        >
          <RiArrowRightWideLine style={{ color: "white", fontSize: "60px" }} />
        </Stack>
      )}
    </Stack>
  );
};
