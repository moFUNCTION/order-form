import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export const CategoryBox = ({ href, image, title }) => {
  const { pathname } = useLocation();
  return (
    <Button
      colorScheme="green"
      variant="outline"
      bgColor={pathname === href ? "green.50" : "white"}
      w="fit-content"
      h="fit-content"
      maxW="400px"
      gap="4"
      paddingBlock="2"
      as={Link}
      to={href}
      pos="relative"
      overflow="hidden"
      flexGrow="1"
    >
      <Image src={image} w="30px" h="30px" objectFit="contain" />
      {title}
      {pathname === href && (
        <Box
          pos="absolute"
          _before={{
            content: `""`,
            position: "absolute",
            w: "250%",
            h: "250%",
            bgColor: "green.500",
            top: " calc(-25% + 1px) ",
            left: "calc(-25% + 1px) ",
            transform: "rotate(45deg)",
            zIndex: "-1",
          }}
          bottom="0px"
          right="0px"
          zIndex="100"
        >
          <IoCheckmark
            style={{
              color: "white",
              fontSize: "14px",
            }}
          />
        </Box>
      )}
    </Button>
  );
};
