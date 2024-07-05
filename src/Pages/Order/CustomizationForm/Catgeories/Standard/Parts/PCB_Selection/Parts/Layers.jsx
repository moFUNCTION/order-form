import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import LayerImage from "../../../../../../../../Assets/Layers-img.png";
import { CopperLayer } from "./CopperLayer";
import { SolderMask } from "./SolderMask";
import { Silkscreen } from "./Silkscreen";
import { useWatch } from "react-hook-form";
import { useLayers } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
export const Layers = ({
  register,
  control,
  name,
  parentName,
  setValue,
  errors,
}) => {
  const { count, onChangeLayerCount } = useLayers();
  return (
    <>
      <Flex alignItems="center" gap="10" flexWrap="wrap">
        <TextWithPopOver title="Layers" popOverHeader="Content">
          The number of copper layers in the board. PCBWay can currently produce
          up to 60 layers, if you need more than 14 layers, please select the
          advanced PCB page for valuation.
          <Image src={LayerImage} w="100%" />
        </TextWithPopOver>
        <Flex alignItems="center" flexWrap="wrap" gap="4">
          {Array.of(1, 2, 4, 6, 8, 10, 12, 14).map((child, index) => {
            return (
              <ButtonStyled
                onClick={() => onChangeLayerCount(child)}
                isActive={count === child}
                size="sm"
                key={index}
              >
                {child} {child !== 1 ? "layers" : "layer"}
              </ButtonStyled>
            );
          })}
        </Flex>
      </Flex>
      <Flex flexWrap="wrap" gap="4">
        {count === 1 && (
          <>
            <CopperLayer register={register} name={`${name}.CopperLayer`} />
            <SolderMask register={register} name={`${name}.SolderMask`} />
            <Silkscreen register={register} name={`${name}.Silkscreen`} />
          </>
        )}
      </Flex>
    </>
  );
};
