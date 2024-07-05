import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import MinTrackImage from "../../../../../../../../Assets/track.png";
import { useWatch } from "react-hook-form";
import { useMaterial } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
export const MinTrackSpacing = ({ setValue, control, name, parentName }) => {
  const { materialType } = useMaterial();
  const MinTrackSpacing = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  useEffect(() => {
    if (
      ["Aluminum", "Copper"].includes(materialType) &&
      MinTrackSpacing === "3/3mil"
    ) {
      HandleChange("4/4mil");
    }
  }, [materialType]);
  return (
    <Flex alignItems="center" gap="10">
      <TextWithPopOver title="Min track/spacing">
        Minimum width of the copper trace and minimum distance between two
        traces. PCBWay engineers will double-check the Min Track/Spacing.
      </TextWithPopOver>
      <Flex flexWrap="wrap" alignItems="center" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              isActive={MinTrackSpacing === value}
              size="sm"
              key={value}
              isDisabled={
                ["Aluminum", "Copper"].includes(materialType) &&
                value === "3/3mil"
              }
            >
              {value}
            </ButtonStyled>
          );
        })}
        <Image ml="3" src={MinTrackImage} w="80px" objectFit="contain" />
      </Flex>
    </Flex>
  );
};
const values = ["3/3mil", "4/4mil", "5/5mil", "6/6mil", "8/8mil"];
