import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Rogers = ({ setValue, name, control }) => {
  const HandleChange = (value) => {
    setValue(name, value);
  };
  const RogerType = useWatch({ control, name });
  return (
    <Flex gap="10" alignItems="center" flexWrap="wrap">
      <TextWithPopOver title="Rogers">
        Rogers RO4000 series has been in a leading position in the industry.
        This low-loss material is widely used in microwave and millimeter-wave
        frequency designs. Compared with traditional PTFE material, it is easier
        to be used in circuit manufacturing and has stable and consistent
        performance. At present, 4003C and 4350B are available for PCBWay. If
        you need other models, please contact your sales representative.
      </TextWithPopOver>
      <Flex gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              key={value}
              size="md"
              isActive={RogerType === value}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["Rogers 4003C", "Rogers 4350B"];
