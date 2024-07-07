import { Box, Flex, Image, Skeleton } from "@chakra-ui/react";
import React, { useTransition } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import SolderMaskColorImage from "../../../../../../../../Assets/Solder-mask-img.png";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import { useSolderMaskColor } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
export const SolderMaskColor = () => {
  const [isPending, startTransition] = useTransition();
  const { color, onChangeSolderMaskColor } = useSolderMaskColor();
  const HandleChangeSolderMaskColor = (value) => {
    startTransition(() => {
      onChangeSolderMaskColor(value);
    });
  };
  return (
    <Flex flexWrap="wrap" gap="10">
      <TextWithPopOver title="Solder mask">
        Solder mask color refers to the color of the PCB surface. Currently,
        PCBWay provides 9 conventional solder mask colors. If you need pink,
        gray, orange, or transparent, please go to the Advanced PCB page to
        choose.
        <Image src={SolderMaskColorImage} />
      </TextWithPopOver>
      <Flex maxW="700px" flexWrap="wrap" gap="3">
        {values.map((value) => {
          return (
            <ButtonStyled
              onClick={() => HandleChangeSolderMaskColor(value)}
              isActive={color === value}
              gap="3"
              size="md"
              key={value}
              isLoading={isPending}
              flexGrow="1"
            >
              <Box
                w="20px"
                h="20px"
                border="1px"
                borderColor="gray.400"
                bgColor={
                  value === "Matte black"
                    ? "black"
                    : value === "Matte green"
                    ? "green"
                    : value === "None"
                    ? "gray.100"
                    : value
                }
              ></Box>
              {value}
            </ButtonStyled>
          );
        })}
      </Flex>
    </Flex>
  );
};
const values = [
  "Green",
  "Red",
  "Yellow",
  "Blue",
  "White",
  "Black",
  "Purple",
  "Matte black",
  "Matte green",
  "None",
];
