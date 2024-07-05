import DesignInPanelImage from "../../../../../../../../Assets/1823110858468.png";
import { Flex, Image, Input, Tooltip } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import ExampleOfDesignPannelsImage from "../../../../../../../../Assets/different.gif";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
export const DesignInPanel = ({ setValue, name, register, control }) => {
  const DesignPannels = useWatch({
    control,
    name,
  });
  const HandleChangeDesignPannels = (value) => {
    setValue(name, value);
  };
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
            <ButtonStyled
              onClick={() => HandleChangeDesignPannels(index + 1)}
              size="md"
              key={index}
              isActive={index + 1 === DesignPannels}
            >
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
            type="number"
            {...register(name, {
              valueAsNumber: true,
            })}
          />
        </Tooltip>
        <TextWithPopOver title="e.g." color="blue.500">
          <Image src={ExampleOfDesignPannelsImage} />
        </TextWithPopOver>
      </Flex>
    </Flex>
  );
};
