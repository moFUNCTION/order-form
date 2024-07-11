import { Flex, Text, Textarea } from "@chakra-ui/react";

export const SpecialRequest = ({ register, name }) => {
  return (
    <Flex flexWrap="wrap" p="2" gap="4">
      <Text mt="2" flexShrink="0">
        Other special request:
      </Text>
      <Textarea
        placeholder="Fill in any PCB details to make it as clear as possible for us to understand your requirements."
        maxH="200px"
        w="100%"
        maxW="700px"
        {...register(name)}
      />
    </Flex>
  );
};
