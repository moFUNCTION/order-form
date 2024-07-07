import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import SkillScreenImage from "../../../../../../../../Assets/Silkscreen-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useWatch } from "react-hook-form";
import { useSolderMaskColor } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
export const SilkScreenColor = ({ setValue, name, control, errors }) => {
  const { color: SolderMaskColor } = useSolderMaskColor();
  const SilkScreenColor = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  useEffect(() => {
    if (
      ["Blue", "Red", "Black", "Purple", "Matte black", "Matte green"].includes(
        SolderMaskColor
      ) &&
      SilkScreenColor === "Black"
    ) {
      HandleChange("White");
    } else if (
      (SolderMaskColor === "Yellow" && SilkScreenColor === "Yellow") ||
      (SolderMaskColor === "White" && SilkScreenColor === "White")
    ) {
      HandleChange("Black");
    }
  }, [SolderMaskColor]);
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver title="Silkscreen">
        The silkscreen is a layer of ink trace used to identify the PCB
        components, marks, logos, symbols, and so on. The color is usually
        white. But when the solder mask ink is white, the silkscreen will be
        black.
        <Image src={SkillScreenImage} />
      </TextWithPopOver>
      <Flex flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              onClick={() => HandleChange(value)}
              gap="3"
              size="md"
              key={value}
              isActive={SilkScreenColor === value}
              isDisabled={(() => {
                if (
                  [
                    "Blue",
                    "Red",
                    "Black",
                    "Purple",
                    "Matte black",
                    "Matte green",
                  ].includes(SolderMaskColor) &&
                  value === "Black"
                ) {
                  return true;
                } else if (
                  (SolderMaskColor === "Yellow" && value === "Yellow") ||
                  (SolderMaskColor === "White" && value === "White")
                ) {
                  return true;
                }
              })()}
            >
              <Box
                w="20px"
                h="20px"
                border="1px"
                borderColor="gray.400"
                bgColor={value === "None" ? "gray.100" : value}
              ></Box>
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = ["White", "Black", "Yellow", "None"];
