import { Box, Button, Image } from "@chakra-ui/react";
import React, { useTransition } from "react";
import { IoCheckmark } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const CategoryBox = ({ href, image, title }) => {
  const { pathname } = useLocation();
  const [isPending, startTransition] = useTransition();
  const Navigate = useNavigate();
  const HandleClick = () => startTransition(() => Navigate(href));
  return (
    <Button
      colorScheme="blue"
      variant="outline"
      bgColor={pathname === href ? "blue.50" : "white"}
      gap="4"
      paddingBlock="2"
      onClick={HandleClick}
      isLoading={isPending}
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
            bgColor: "blue.500",
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
