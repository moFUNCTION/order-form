import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const FRA_TG = ({ layers, setValue, control, name }) => {
  const HandleChange = (value) => {
    setValue(name, value);
  };
  const FRA_TG_Type = useWatch({ control, name });
  useEffect(() => {
    if (
      layers >= 4 &&
      !["S1000H TG150", "S1000-2M TG170"].includes(FRA_TG_Type)
    ) {
      HandleChange("S1000H TG150");
    }
  }, [layers]);
  return (
    <Flex gap="10" alignItems="start">
      <TextWithPopOver flexShrink={0} title="FR4-TG" mt="2">
        TG means Glass Transition Temperature. Ordinary TG is 130 ℃ or more,
        medium TG is about greater than 150 ℃, and advanced TG is generally
        greater than 170 ℃. The higher the TG, the better the temperature
        resistance of the material. The default material of PCBWay has a TG of
        150-160℃, which is higher that most companies.
      </TextWithPopOver>
      <Stack>
        <Flex flexWrap="wrap" gap="3">
          {values.map((value) => {
            return (
              <ButtonStyled
                isDisabled={
                  layers >= 4 &&
                  ["TG 130-140", "TG 150-160", "TG 170-180"].includes(value)
                }
                size="sm"
                key={value}
                onClick={() => HandleChange(value)}
                isActive={FRA_TG_Type === value}
              >
                {value}
              </ButtonStyled>
            );
          })}
        </Flex>
        <Text color="yellow.700" fontSize="sm">
          {FRA_TG_Type === "TG 130-140"
            ? `*The base material of 2-layer PCB is automatically upgraded to TG150
          for FREE with more stable and higher quality. Except for some
          parameters (eg.: Weighty finished copper; Greater board thickness;
          Custom stackup; Via in pad/ Via filled with resin, etc.)`
            : ["S1000H TG150", "S1000-2M TG170"].includes(FRA_TG_Type) &&
              `
            *Base material with high TG has good CAF resistance, high heat resistance, dimensional stability and is suitable for lead-free soldering process. [Download Material Report]
            `}
        </Text>
      </Stack>
    </Flex>
  );
};
const values = [
  "TG 130-140",
  "TG 150-160",
  "TG 170-180",
  "S1000H TG150",
  "S1000-2M TG170",
];
