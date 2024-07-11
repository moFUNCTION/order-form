import { Flex, Image, Select, Stack, Text } from "@chakra-ui/react";
import React, { useTransition } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import EdgeConnectorImage from "../../../../../../../../Assets/Edge-connector-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useEdgeConnector } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
import BevellingImage from "../../../../../../../../Assets/chamfering.png";
export const EdgeConnector = ({ register, name }) => {
  const [isPending, startTransition] = useTransition();
  const {
    values: { type, enabled },
    onChangeValueWithinEdgeConnector,
  } = useEdgeConnector();

  return (
    <Flex flexWrap="wrap" gap="10" alignItems="center">
      <TextWithPopOver flexShrink="0" title="Edge connector">
        Edge connectors achieve electrical connection by contacting the golden
        fingers on the PCB. If your design includes golden finger, please check
        'Yes' for this item and select the surface finish method and bevelling
        angle for it. Otherwise, please check 'No'.
        <Image w="100%" src={EdgeConnectorImage} />
      </TextWithPopOver>
      <Stack gap="3">
        <Flex flexWrap="wrap" alignItems="center" gap="8">
          <Flex gap="3">
            {EdgeConnectorEnableValues.map((value, index) => {
              return (
                <ButtonStyled
                  onClick={() =>
                    onChangeValueWithinEdgeConnector("enabled", value)
                  }
                  isActive={enabled === value}
                  size="md"
                  key={index}
                >
                  {value}
                </ButtonStyled>
              );
            })}
          </Flex>
          {enabled === "Yes" && (
            <Flex alignItems="center" gap="7">
              <TextWithPopOver title="Bevelling">
                Bevelling of the gold finger is the process of creating a
                beveled edge on the gold finger of a PCB, which can make the PCB
                enter the connector easier, and finally build an excellent
                electrical connection.
              </TextWithPopOver>
              <Select {...register(`${name}.Bevelling`)} cursor="pointer">
                {BevellingValues.map((value) => {
                  return <option key={value}>{value}</option>;
                })}
              </Select>
              <Image src={BevellingImage} w="100px" objectFit="contain" />
            </Flex>
          )}
        </Flex>
        {enabled === "Yes" && (
          <Flex maxW="700px" gap="2" flexWrap="wrap">
            {types.map((typeValue, index) => {
              return (
                <ButtonStyled
                  onClick={() =>
                    onChangeValueWithinEdgeConnector("type", typeValue)
                  }
                  isActive={typeValue === type}
                  size="md"
                  key={index}
                  flexGrow="1"
                >
                  {typeValue}
                </ButtonStyled>
              );
            })}
          </Flex>
        )}
        <Text color="yellow.600" fontSize="sm">
          *The above options are only Edge connector Surface Finish
        </Text>
      </Stack>
    </Flex>
  );
};
const EdgeConnectorEnableValues = ["Yes", "No"];
const BevellingValues = ["No", "Yes (20°)", "Yes (30°)", "Yes (45°)"];
const types = [
  "HASL with lead",
  "HASL lead free",
  "Immersion gold(ENIG)",
  "OSP",
  "Hard gold",
  "Immersion silver(Ag)",
  "Immersion tin",
  "ENEPIG",
  "None(Plain copper)",
];
