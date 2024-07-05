import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
export const ButtonStyled = ({ children, isActive, ...rest }) => {
  return (
    <Button
      colorScheme={isActive && "blue"}
      variant="outline"
      bgColor={isActive ? "blue.50" : "white"}
      size="lg"
      {...rest}
      pos="relative"
      zIndex="1"
      _hover={{
        borderColor: "blue.500",
      }}
      overflow="hidden"
    >
      {children}
      {isActive && (
        <Box
          pos="absolute"
          _before={{
            content: `""`,
            position: "absolute",
            w: "250%",
            h: "250%",
            bgColor: "blue.500",
            top: " calc(-25% + 1px) ",
            left: "calc(-25% + 1px) ",
            transform: "rotate(45deg)",
            zIndex: "-1",
          }}
          bottom="0px"
          right="0px"
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
