import DesignInPanelImage from "../../../../../../../../Assets/1823110858468.png";
import { Flex, Image, Input, Tooltip } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";

import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
export const DesignInPanel = () => {
  return (
    <Flex alignItems="center" gap="10" flexWrap="wrap">
      <TextWithPopOver
        title="Different design in panel"
        popOverHeader="Content"
      >
        It means there are different designs in your files separated by v-cuts,
        stamp holes, milling slots or others. We willl charge additional panel
        cost if there are different kinds of PCB designs in one Gerber file.
        <Image src={DesignInPanelImage} w="100%" />
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="4">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <ButtonStyled size="md" key={index}>
              {index + 1}
            </ButtonStyled>
          );
        })}
        <Tooltip label="set a specific size">
          <Input
            placeholder="specific size"
            variant="outline"
            bgColor="white"
            w="140px"
            flexGrow="1"
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};
