import { Flex } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "./../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";

export const Existing_Fiducials = ({ setValue, control, name }) => {
  const selectedValue = useWatch({ control, name });
  const HandleChange = (value) => setValue(name, value);
  return (
    <Flex gap="9">
      <TextWithPopOver title="Existing fiducials:">
        Fiducials {`"`} half lasered“, always on the PCB side (bottom).
      </TextWithPopOver>
      <Flex gap="3">
        {values.map((value, index) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              isActive={selectedValue === value}
              size="md"
              key={index}
            >
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["None", "half lasered", "lasered through"];
