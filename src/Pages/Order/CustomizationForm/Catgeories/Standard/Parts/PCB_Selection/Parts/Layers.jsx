import React, { useTransition } from "react";
import { Flex, Image } from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import LayerImage from "../../../../../../../../Assets/Layers-img.png";
import { CopperLayer } from "./CopperLayer";
import { SolderMask } from "./SolderMask";
import { Silkscreen } from "./Silkscreen";
import { useWatch } from "react-hook-form";
import { useLayers } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
const Layer = ({ HandleChange, value, selectedValue }) => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => startTransition(() => HandleChange(value));
  return (
    <ButtonStyled
      onClick={onClick}
      isActive={selectedValue === value}
      size="sm"
      isLoading={isPending}
    >
      {value} {value !== 1 ? "layers" : "layer"}
    </ButtonStyled>
  );
};
export const Layers = ({
  register,
  control,
  name,
  parentName,
  setValue,
  errors,
}) => {
  const [isPending, startTransition] = useTransition();
  const { count, onChangeLayerCount } = useLayers();
  const HandleChange = (value) => {
    startTransition(() => {
      onChangeLayerCount(value);
    });
  };
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
              <Layer
                value={child}
                index={index}
                HandleChange={HandleChange}
                key={index}
                selectedValue={count}
              />
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
