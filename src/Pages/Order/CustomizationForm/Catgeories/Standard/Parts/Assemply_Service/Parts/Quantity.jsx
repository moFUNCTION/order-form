import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";

export const Quantity = ({ register, name, errors }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center" gap="9">
      <TextWithPopOver title="Quantity">
        Please fill in total quantity of single PCBs.
      </TextWithPopOver>
      <Stack>
        <InputGroup w="240px">
          <Input
            {...register(name, {
              min: 1,
              defaultValue: 0,
            })}
            type="number"
          />
          <InputRightAddon>Pieces</InputRightAddon>
        </InputGroup>
        <Text fontSize="sm" color="yellow.600">
          Please fill in total quantity of single PCBs.
        </Text>
      </Stack>
    </Flex>
  );
};
