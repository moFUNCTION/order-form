import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import FR_4_Image from "../../../../../../../../Assets/fr4_metarial.jpg";
import AluminiumImage from "../../../../../../../../Assets/Aluminum-Board.jpg";
import RogersImage from "../../../../../../../../Assets/rogers.jpg";
import HDI_Board_Image from "../../../../../../../../Assets/hdi_board.jpg";
import CopperBaseImage from "../../../../../../../../Assets/copper_board.jpg";
import { useWatch } from "react-hook-form";
import { FRA_TG } from "./FRA_TG";
import { ThermalConductivity } from "./ThermalConductivity";
import { Rogers } from "./Rogers";
import { Thermoelectric_separation } from "./Thermoelectric_separation";
import { MCPCB_Structure } from "./MCPCB_Structure";
import { Thickness } from "./Thickness";
import {
  useLayers,
  useMaterial,
} from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
export const MaterialType = ({
  setValue,
  control,
  name,
  parentName,
  register,
}) => {
  const { count: layersCount, onChangeLayerCount } = useLayers();
  const { onChangeMaterialType, materialType } = useMaterial();

  useEffect(() => {
    if (layersCount < 4 && materialType === "HDI") {
      onChangeMaterialType("FR-4");
    }
  }, [layersCount]);
  useEffect(() => {
    if (layersCount >= 6 && ["Aluminum", "Copper"].includes(materialType)) {
      onChangeMaterialType("FR-4");
    }
  }, [layersCount]);
  useEffect(() => {
    if (layersCount >= 6 && ["Aluminum", "Copper"].includes(materialType)) {
      onChangeLayerCount(1);
    }
  }, [materialType]);

  return (
    <>
      <Flex alignItems="center" flexWrap="wrap" gap="10">
        <TextWithPopOver title="Material" popOverHeader="Content">
          FR4 is the most common arade dielectric material that is used in the
          fabrication of circu boards. Aluminum boards have better heat
          dissipation and thermal transfer than standard FR-4 constructions. The
          copper base boards have a great thermal conductivity better than
          aluminum PCB. Due to its characteristics of low dielectric loss,
          Rogers is often used in high-frequency PCB. If you need other
          materials, please contact your sales representative.
        </TextWithPopOver>
        <Stack>
          <Flex flexWrap="wrap" gap="4">
            {materials.map((material, index) => {
              return (
                <ButtonStyled
                  onClick={() => onChangeMaterialType(material.value)}
                  isActive={material.value === materialType}
                  size="lg"
                  key={index}
                  gap="3"
                  isDisabled={layersCount < 4 && material.value === "HDI"}
                >
                  <Image
                    src={material.image}
                    w="30px"
                    h="30px"
                    objectFit="contain"
                  />
                  <Box textAlign="left">
                    {material.title}
                    {material.subTitle && (
                      <Text fontSize="xs" color="yellow.600">
                        {material.subTitle}
                      </Text>
                    )}
                  </Box>
                </ButtonStyled>
              );
            })}
          </Flex>
          <Text color="yellow.700">
            *Material model can be remarked below. HDI is available for 4-layer
            or more.
          </Text>
        </Stack>
      </Flex>
      {["FR-4", "HDI"].includes(materialType) && (
        <FRA_TG
          layers={layersCount}
          setValue={setValue}
          control={control}
          name={`${name}.FR4_TG`}
        />
      )}
      {["Copper", "Aluminum"].includes(materialType) && (
        <>
          <ThermalConductivity
            materialType={materialType}
            name={`${name}.Thermal_conductivity`}
            control={control}
            setValue={setValue}
          />
          {materialType === "Copper" && (
            <Thermoelectric_separation
              setValue={setValue}
              control={control}
              name={`${name}.Thermoelectric_separation`}
            />
          )}
          {layersCount >= 2 && (
            <MCPCB_Structure
              setValue={setValue}
              control={control}
              name={`${name}.Thermoelectric_separation`}
              layers={layersCount}
            />
          )}
        </>
      )}
      {materialType === "Rogers" && (
        <Rogers control={control} name={`${name}.Rogers`} setValue={setValue} />
      )}
      <Thickness
        setValue={setValue}
        control={control}
        name={`${name}.Thickness`}
        layers={layersCount}
        materialType={materialType}
        register={register}
      />
    </>
  );
};
const materials = [
  {
    image: FR_4_Image,
    title: "FR-4",
    value: "FR-4",
  },
  {
    image: AluminiumImage,
    title: "Aluminum",
    value: "Aluminum",
  },
  {
    image: RogersImage,
    title: "Rogers",
    value: "Rogers",
  },
  {
    title: "HDI(Buried/blind vias)",
    image: HDI_Board_Image,
    subTitle: ">= 4 layers",
    value: "HDI",
  },
  {
    title: "Copper Base",
    image: CopperBaseImage,
    value: "Copper",
  },
];
