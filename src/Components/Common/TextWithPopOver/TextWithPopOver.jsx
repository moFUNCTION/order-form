import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillQuestionCircle } from "react-icons/ai";
export const TextWithPopOver = ({
  title,
  children,
  popOverHeader = "Content",
  ...rest
}) => {
  return (
    <Popover trigger="hover" placement="top-start">
      <PopoverTrigger>
        <Flex {...rest} alignItems="center" gap="2">
          <Text gap="2">{title}</Text>
          <AiFillQuestionCircle
            style={{
              color: "blue",
            }}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader> {popOverHeader} </PopoverHeader>
        <PopoverBody> {children} </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
