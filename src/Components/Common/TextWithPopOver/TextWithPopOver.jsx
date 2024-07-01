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
import { CiCircleQuestion } from "react-icons/ci";

export const TextWithPopOver = ({
  title,
  children,
  popOverHeader,
  ...rest
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex {...rest} alignItems="center" gap="2">
          <Tooltip label="click here to show data">
            <Text gap="2">{title}</Text>
          </Tooltip>
          <CiCircleQuestion
            style={{
              color: "green.500",
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
