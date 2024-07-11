import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { Flex } from "@chakra-ui/react";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
import { useEdgeConnector } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";

export const SurfaceFinish = ({ setValue, name, control }) => {
  const SurfaceFinishSelected = useWatch({ control, name });
  const HandleChangeSurfaceFinish = (value) => {
    setValue(name, value);
  };
  const {
    values: { type: EdgeConnectorType, enabled },
  } = useEdgeConnector();
  const CheckIfDisabled = (value) => {
    if (enabled === "Yes") {
      switch (EdgeConnectorType) {
        case "HASL with lead":
          {
            if (EdgeConnectorType === value) {
              return false;
            }
          }
          break;
        case "HASL lead free":
          {
            if (value.includes("HASL lead free")) {
              return false;
            }
          }
          break;
        case "Immersion gold(ENIG)":
          {
            if (
              value.includes("Immersion gold") ||
              value === "HASL lead free"
            ) {
              return false;
            }
          }
          break;
        case "OSP":
          {
            if (value === "OSP") {
              return false;
            }
          }
          break;
        case "Hard gold": {
          if (
            [
              "HASL lead free + Selective Immersion gold",
              "None(Plain copper)",
            ].includes(value)
          ) {
            return true;
          }
          return false;
        }
        case "Immersion silver(Ag)":
          {
            if (value === "Immersion silver(Ag)") {
              return false;
            }
          }
          break;
        case "Immersion tin":
          {
            if (value === "Immersion tin") {
              return false;
            }
          }
          break;
        case "ENEPIG":
          {
            if (value === "ENEPIG") {
              return false;
            }
          }
          break;
        case "None(Plain copper)": {
          if (value === "None(Plain copper)") {
            return false;
          }
        }
      }

      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (enabled === "Yes") {
      HandleChangeSurfaceFinish(undefined);
    }
  }, [EdgeConnectorType]);
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver flexShrink="0" title="Surface finish">
        Surface finish is an important part of PCB production. It can protect
        the copper from oxidation, which would render the PCB unusable. In
        addition, it provides a smooth surface for the components to be
        soldered.
      </TextWithPopOver>
      <Flex maxW="700px" flexWrap="wrap" gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChangeSurfaceFinish(value)}
              size="md"
              key={index}
              isActive={SurfaceFinishSelected === value}
              isDisabled={CheckIfDisabled(value)}
              flexGrow="1"
              flexWrap="wrap"
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = [
  "HASL with lead",
  "HASL lead free",
  "Immersion gold(ENIG)",
  "OSP",
  "Hard gold",
  "Immersion silver(Ag)",
  "Immersion tin",
  "HASL lead free + Selective Immersion gold",
  "HASL lead free + Selective Hard gold",
  "Immersion gold + Selective Hard gold",
  "ENEPIG",
  "None(Plain copper)",
];
