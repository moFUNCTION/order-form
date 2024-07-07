import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import ViaProcessImage from "../../../../../../../../Assets/1419211244042.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
export const ViaProccess = ({ setValue, control, name }) => {
  const ViaProccessSelectedValue = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver title="Via process : ">
        For gerber files, we will process according to the files, and this
        option is invalid. For .PCB or .PCBDOC files, we will process with the
        parameters you select.
        <Image w="100%" src={ViaProcessImage} />
      </TextWithPopOver>
      <Stack>
        <Flex flexWrap="wrap" gap="3">
          {values.map((value, index) => {
            return (
              <ButtonStyled
                isActive={ViaProccessSelectedValue === value}
                onClick={() => HandleChange(value)}
                size="md"
                key={index}
              >
                {value}
              </ButtonStyled>
            );
          })}
        </Flex>

        <Text fontSize="sm" color="yellow.600">
          {ViaProccessSelectedValue === "Plugged vias with solder mask"
            ? `
        *If you want to do filled vias with resin, please select in Additional Options!
        `
            : ` *For Gerber files this choice will not affect anything, PCB will be
    made using the parameters of the files.`}
        </Text>
      </Stack>
    </Flex>
  );
};
const values = [
  "Tenting vias",
  "Plugged vias with solder mask",
  "Vias not covered",
];
