import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import RemoveProductImage from "../../../../../../../../Assets/Remove-1.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
export const RemoveProduct = ({ setValue, name, control }) => {
  const HandleChange = (value) => setValue(name, value);
  const ValueSelected = useWatch({ control, name });
  console.log(ValueSelected);
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver title="Remove product No : ">
        ·PCBWay will add our product number on PCB to distinguish your PCBs from
        others. ·If you want to remove it, there will be an extra $1.5 charge.
        ·If you want to put it in a specific location, please indicate the
        location by adding the text "WayWayWay" in silkscreen layer and there is
        no extra charge for this option.
        <Image w="100%" src={RemoveProductImage} />
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              size="md"
              gap="2"
              key={value}
              isActive={ValueSelected === value}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["No", "Yes (extra+$ 1.5)", "Specify a location"];
