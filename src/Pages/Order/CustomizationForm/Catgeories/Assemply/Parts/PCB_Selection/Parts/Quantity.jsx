import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
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
  Radio,
  RadioGroup,
  InputLeftAddon,
  ButtonGroup,
  Button,
  Stack,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { useWatch } from "react-hook-form";
import { useBoardType } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";

export const Quantity = ({
  setValue,
  control,
  name,
  parentName,
  register,
  errors,
}) => {
  const HandleChangeQuantity = (value) => {
    setValue(name, value);
  };
  const Quantity = useWatch({ control, name });
  const {
    values: { boardType },
  } = useBoardType();

  return (
    <>
      <Flex alignItems="center" w="100%" gap="10" flexWrap="wrap">
        <TextWithPopOver
          title={`Quantity (${
            boardType === "Panel-by-Customer" ? "sets" : "single"
          }):`}
          popOverHeader="Content"
        >
          Please choose the number of single pieces you need. For standard PCB,
          the starting quantity is 5 pieces.
        </TextWithPopOver>
        <Flex
          maxW="500px"
          flexGrow="1"
          alignItems="center"
          flexWrap="wrap"
          gap="4"
        >
          <Popover>
            <PopoverTrigger>
              <Stack flexGrow="1">
                <InputGroup flexGrow="1">
                  <Input
                    readOnly
                    value={Quantity ? Quantity : "please choose the quantity"}
                    bgColor="white"
                    placeholder="quantity"
                  />
                  <InputRightAddon bgColor="gray.300">pcs</InputRightAddon>
                </InputGroup>
                {errors?.message && (
                  <Text color="red.600">{errors?.message}</Text>
                )}
              </Stack>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>choose quantity</PopoverHeader>
              <PopoverBody>
                <RadioGroup value={Quantity} onChange={HandleChangeQuantity}>
                  <Flex flexWrap="wrap" gap="3">
                    {[
                      5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 125, 150, 200,
                      250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000,
                      1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500,
                      6000, 6500, 7000, 7500, 8000, 9000, 10000,
                    ].map((item, index) => {
                      return (
                        <Radio size="md" value={item} key={index}>
                          {item}
                        </Radio>
                      );
                    })}
                  </Flex>
                </RadioGroup>
                <Flex mt="3" gap="3" alignItems="center">
                  <Text>other</Text>
                  <Input
                    {...register(name, {
                      valueAsNumber: true,
                    })}
                    size="sm"
                  />
                </Flex>
                <Text mt="3" color="yellow.600" fontSize="sm">
                  (≥5 ㎡ to manually enter the number!)
                </Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </>
  );
};
