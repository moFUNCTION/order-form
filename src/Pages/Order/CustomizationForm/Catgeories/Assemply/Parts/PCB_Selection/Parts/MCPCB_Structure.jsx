import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import boardThickness_2Lalm from "../../../../../../../../Assets/boardThickness_2Lalm.png";
import boardThickness_4Lalm from "../../../../../../../../Assets/boardThickness_4Lalm.png";
import boardThickness_alm2L from "../../../../../../../../Assets/boardThickness_alm2L.png";
import boardThickness_alm4L from "../../../../../../../../Assets/boardThickness_alm4L.png";
import { useWatch } from "react-hook-form";
export const MCPCB_Structure = ({ layers, setValue, name, control }) => {
  const MCPCB_Structure_Type = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver title="Structure of MCPCB">
        This is for Double-sided / Multilayer metal substrate boards (Aluminum
        or Copper Base). There are two structures to choose from according to
        whether the metal base is in the middle or the bottom.
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="2">
        {MCPCB_Structure_values.map((child) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(child.value)}
              gap="3"
              p="2"
              size="md"
              key={child.value}
              isActive={MCPCB_Structure_Type === child.value}
            >
              <Image
                w="40px"
                src={child[`imageIn${layers === 2 ? 2 : 4}Layers`]}
              />
              {child.value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const MCPCB_Structure_values = [
  {
    value: "Structure of 2L MCPCB Metal base on the bottom side",
    imageIn2Layers: boardThickness_2Lalm,
    imageIn4Layers: boardThickness_4Lalm,
  },
  {
    value: "Metal core in the middle",
    imageIn2Layers: boardThickness_alm2L,
    imageIn4Layers: boardThickness_alm4L,
  },
];
