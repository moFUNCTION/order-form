import {
  Flex,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import BoardTypeImage from "../../../../../../../../Assets/Board-type.png";
import XAllowanceImage from "../../.../../../../../../../../Assets/1649407767351.png";
import { useWatch } from "react-hook-form";

export const BoardType = ({ errors, register, control, name, setValue }) => {
  const [BoardType, X_out_Allowance] = useWatch({
    control,
    name: [`${name}.type`, `${name}.X_out_Allowance`],
  });
  const HandleChangeBoardType = (value) => {
    setValue(`${name}.type`, value);
  };
  const HandleChangeX_Out_Allowance = (value) => {
    setValue(`${name}.X_out_Allowance`, value);
  };
  return (
    <>
      <Flex alignItems="center" flexWrap="wrap" gap="10">
        <TextWithPopOver title="Board Type" popOverHeader="Content">
          PCBs will be shipped in single pieces or in panel. For bulk assembly
          orders (quantity greater than 30), we recommend shipping in panel,
          which will improve the assembly efficiency. Learn More
          <Image src={BoardTypeImage} w="100%" />
        </TextWithPopOver>
        <Flex flexWrap="wrap" gap="4">
          {[
            { title: "single pieces", value: "Single-pieces" },
            { title: "Panel by Customer", value: "Panel-by-Customer" },
            { title: "Panel by PCBWay", value: "Panel-by-PCBWay" },
          ].map((child, index) => {
            return (
              <ButtonStyled
                size="md"
                key={index}
                isActive={BoardType === child.value}
                onClick={() => HandleChangeBoardType(child.value)}
              >
                {child.title}
              </ButtonStyled>
            );
          })}
        </Flex>
      </Flex>
      {BoardType === "Panel-by-Customer" && (
        <Flex
          borderRadius="lg"
          p="4"
          alignItems="center"
          justifyContent="center"
          gap="4"
          bgColor="white"
          w="100%"
        >
          <TextWithPopOver
            popOverHeader="Content"
            title="X-out Allowance in Panel"
          >
            Bad PCBs may exist in the panel, the quotation will increase by
            about 30% if X-out Allowance is not accepted. Learn More
            <Image src={XAllowanceImage} />
          </TextWithPopOver>
          <RadioGroup
            value={X_out_Allowance}
            onChange={HandleChangeX_Out_Allowance}
          >
            <HStack gap="4">
              <Radio value="Accept">Accept</Radio>
              <Radio value="Not-Accept">Not Accept</Radio>
            </HStack>
          </RadioGroup>
        </Flex>
      )}
    </>
  );
};
