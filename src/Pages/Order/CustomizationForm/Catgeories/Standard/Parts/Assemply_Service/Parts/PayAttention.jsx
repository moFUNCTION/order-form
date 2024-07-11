import {
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { useWatch } from "react-hook-form";

export const PayAttention = ({ setValue, control, name, register }) => {
  const ContainesSenstiveComponents = useWatch({
    control,
    name: `${name}.ContainesSenstiveComponents`,
  });
  const HandleChangeContainesSenstiveComponents = (value) =>
    setValue(`${name}.ContainesSenstiveComponents`, value);
  const AcceptAlternativesMadeInChina = useWatch({
    control,
    name: `${name}.AcceptAlternativesMadeInChina`,
  });
  const HandleChangeAcceptAlternativesMadeInChina = (value) =>
    setValue(`${name}.AcceptAlternativesMadeInChina`, value);
  return (
    <Flex flexWrap="wrap" gap="10">
      <Text>* Pay attention</Text>
      <Stack flexGrow="1" gap="3">
        <Stack gap="2">
          <TextWithPopOver title="Contains sensitive components/parts: ">
            Due to the diversity of components, there are usually many things
            need to be paid attention to while doing assembly, such as whether
            it needs to be baked before mounting, whether there are special
            requirements about welding temperature, corrosion resistance,
            humidity, etc. Our engineers will check all the information, but it
            is still inevitable that there will be omissions. So it ll be much
            better that you can hightlight the special requirements in advance.
          </TextWithPopOver>
          <RadioGroup
            onChange={HandleChangeContainesSenstiveComponents}
            value={ContainesSenstiveComponents}
          >
            <HStack gap="3">
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </HStack>
          </RadioGroup>
          {ContainesSenstiveComponents === "Yes" && (
            <Textarea
              {...register(`${name}.providedText`)}
              minH="150px"
              placeholder="The following components need to be paid attention to during the assembly process:
Mfg Part No., welding temperature
Mfg Part No., it is forbidden to use plate washer water to avoid corrosion
Mfg Part No., it needs to bake before placement"
            />
          )}
        </Stack>
        <Stack>
          <Text>Do you accept alternatives/substitutes made in China?</Text>
          <RadioGroup
            onChange={HandleChangeAcceptAlternativesMadeInChina}
            value={AcceptAlternativesMadeInChina}
          >
            <HStack gap="3">
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </HStack>
          </RadioGroup>
        </Stack>
      </Stack>
    </Flex>
  );
};
