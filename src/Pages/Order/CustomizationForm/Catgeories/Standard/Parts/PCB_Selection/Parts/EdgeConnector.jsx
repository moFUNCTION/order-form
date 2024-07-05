import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import EdgeConnectorImage from "../../../../../../../../Assets/Edge-connector-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
export const EdgeConnector = () => {
  return (
    <Flex gap="5">
      <TextWithPopOver title="Edge connector">
        Edge connectors achieve electrical connection by contacting the golden
        fingers on the PCB. If your design includes golden finger, please check
        'Yes' for this item and select the surface finish method and bevelling
        angle for it. Otherwise, please check 'No'.
        <Image w="100%" src={EdgeConnectorImage} />
      </TextWithPopOver>
      {values.map((value) => {
        return (
          <ButtonStyled size="md" key={value}>
            {value}
          </ButtonStyled>
        );
      })}
    </Flex>
  );
};
const values = ["Yes", "No"];
