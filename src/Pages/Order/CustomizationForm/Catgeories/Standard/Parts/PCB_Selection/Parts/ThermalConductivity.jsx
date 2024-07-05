import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const ThermalConductivity = ({
  materialType,
  setValue,
  control,
  name,
}) => {
  const HandleChange = (value) => {
    setValue(name, value);
  };
  const Thermal_Conductivity_Type = useWatch({ control, name });
  useEffect(() => {
    if (
      ["1.0W/(m⋅K)", "1.5W/(m⋅K)"].includes(Thermal_Conductivity_Type) &&
      materialType === "Copper"
    ) {
      HandleChange("2.0W/(m⋅K)");
    }
  }, [materialType]);
  return (
    <Flex alignItems="center" gap="3" mt="2">
      <TextWithPopOver title="Thermal conductivity">
        The thermal conductivity of aluminum PCB/copper base PCB is the measure
        of the ability of the material to conduct heat away from a source. It is
        typically measured in watts per meter Kelvin (W/mK) and commonly denoted
        by k,λ, or K.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              isDisabled={
                ["1.0W/(m⋅K)", "1.5W/(m⋅K)"].includes(value) &&
                materialType === "Copper"
              }
              size="sm"
              key={value}
              onClick={() => HandleChange(value)}
              isActive={value === Thermal_Conductivity_Type}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["1.0W/(m⋅K)", "1.5W/(m⋅K)", "2.0W/(m⋅K)", "3.0W/(m⋅K)"];
