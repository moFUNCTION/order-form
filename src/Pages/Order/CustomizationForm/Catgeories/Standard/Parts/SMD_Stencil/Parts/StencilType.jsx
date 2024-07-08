import { Flex, Text, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
import ImageAssets1 from "../../../../../../../../Assets/stencil-frame-no.png";
import ImageAssets2 from "../../../../../../../../Assets/stencil-sm.png";
import { TextWithPopOver } from "./../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
export const StencilType = ({ onChange, selectedValue }) => {
  return (
    <Flex flexWrap="wrap" w="100%" gap="8" alignItems="center">
      <Text w="fit-content" flexShrink="0">
        Stencil type :
      </Text>
      <Stack>
        <Flex flexWrap="wrap" alignItems="center" gap="3">
          {values.map((value, index) => {
            return (
              <ButtonStyled
                size="md"
                key={index}
                onClick={() => onChange(value)}
                isActive={selectedValue === value}
              >
                {value}
              </ButtonStyled>
            );
          })}
        </Flex>
        <Text color="yellow.600" fontSize="sm">
          Allow combining several PCBs on a single SMD stencil.
        </Text>
      </Stack>

      <Image
        ml="auto"
        src={StencilType === values[0] ? ImageAssets1 : ImageAssets2}
        mr="6"
      />
    </Flex>
  );
};
const values = ["Framework", "Non-framework"];
