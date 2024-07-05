import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import HoleImage from "../../../../../../../../Assets/hole.png";
import { useMaterial } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
import { useWatch } from "react-hook-form";
export const MinHoleSize = ({ setValue, control, name }) => {
  const MinHoleSizeSelected = useWatch({
    control,
    name,
  });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  const { materialType } = useMaterial();
  useEffect(() => {
    if (
      materialType === "Aluminum" &&
      ["0.15mm", "0.2mm", "0.25mm", "0.3mm"].includes(MinHoleSizeSelected)
    ) {
      HandleChange("0.8mm");
    } else if (
      materialType !== "Aluminum" &&
      ["0.8mm", "1.0mm"].includes(MinHoleSizeSelected)
    ) {
      HandleChange("0.3mm");
    }
  }, [materialType]);
  return (
    <Flex gap="10" flexWrap="wrap" alignItems="center">
      <TextWithPopOver title="Min hole size">
        Minimum diameter of holes. PCBWay engineers will double-check the min
        hole size.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              isDisabled={
                (materialType === "Aluminum" &&
                  ["0.15mm", "0.2mm", "0.25mm", "0.3mm"].includes(value)) ||
                (materialType !== "Aluminum" &&
                  ["0.8mm", "1.0mm"].includes(value))
              }
              onClick={() => HandleChange(value)}
              size="sm"
              key={value}
              isActive={value === MinHoleSizeSelected}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
      <Image src={HoleImage} w="50px" />
    </Flex>
  );
};
const values = [
  "0.15mm",
  "0.2mm",
  "0.25mm",
  "0.3mm",
  "0.8mm",
  "1.0mm",
  "No Drill",
];
