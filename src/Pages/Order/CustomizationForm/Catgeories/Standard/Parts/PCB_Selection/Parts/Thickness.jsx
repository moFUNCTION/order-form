import { Flex, Image, Text, Input, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import ThicknessImage from "../../../../../../../../Assets/thickness.png";
import { useWatch } from "react-hook-form";
export const Thickness = ({
  setValue,
  name,
  control,
  layers,
  materialType,
  register,
}) => {
  const Thickness = useWatch({ control, name });
  const HandleChange = (value) => {
    setValue(name, value);
  };
  useEffect(() => {
    HandleChange(undefined);
  }, [materialType, layers]);
  useEffect(() => {
    const selectedValue = normalValues.find((child) => {
      return child.value === Thickness;
    });
    if (
      selectedValue &&
      selectedValue.isDisabled &&
      selectedValue.isDisabled(layers) === true
    ) {
      HandleChange(
        normalValues.find((child) => {
          return !child.isDisabled(layers);
        }).value
      );
    }
  }, [layers]);
  return (
    <Flex mt="3" alignItems="center" gap="10">
      <TextWithPopOver title="Thickness">
        For ordinary materials, the board thickness refers to the thickness of
        the PCB after production is complete, and the error is about 10%
        {"(+/-10% (T>=1mm) or +/- 0.1mm (T<1mm).)."} The error is mainly caused
        by solder mask and copper sinking. If there are other requirements for
        thickness error, please make a note in Other Special Requirements. Note:
        For single sided/double sided Rogers board, the thickness refers to
        thickness of substrate.
      </TextWithPopOver>
      <Stack>
        <Flex flexWrap="wrap" gap="3">
          {materialType === "Rogers" && layers < 4
            ? valuesWithinRoger.map((value) => {
                return (
                  <ButtonStyled
                    onClick={() => HandleChange(value)}
                    size="sm"
                    key={value}
                    isActive={value === Thickness}
                  >
                    {value}
                  </ButtonStyled>
                );
              })
            : normalValues.map((child) => {
                const { value, isDisabled } = child;
                return (
                  <ButtonStyled
                    onClick={() => HandleChange(value)}
                    size="sm"
                    key={value}
                    isActive={value === Thickness}
                    isDisabled={isDisabled && isDisabled(layers)}
                  >
                    {value}
                  </ButtonStyled>
                );
              })}
        </Flex>
        <Flex gap="3" alignItems="center">
          <Input
            {...register(name, {
              valueAsNumber: true,
            })}
            type="number"
            w="100px"
            placeholder="1.7-8"
          />
          <Text>* Unit: mm</Text>
          <Image w="60px" objectFit="contain" src={ThicknessImage} />
        </Flex>
      </Stack>
    </Flex>
  );
};
const normalValues = [
  {
    value: 0.2,
    isDisabled: (layer) => {
      return layer >= 4;
    },
  },
  {
    value: 0.3,
    isDisabled: (layer) => {
      return layer >= 4;
    },
  },
  {
    value: 0.4,
    isDisabled: (layer) => {
      return layer >= 6;
    },
  },
  {
    value: 0.6,
    isDisabled: (layer) => {
      return layer >= 6;
    },
  },
  {
    value: 0.8,
    isDisabled: (layer) => {
      return layer >= 8;
    },
  },
  {
    value: 1,
    isDisabled: (layer) => {
      return layer >= 10;
    },
  },
  {
    value: 1.2,
    isDisabled: (layer) => {
      return layer >= 12;
    },
  },
  {
    value: 1.6,
    isDisabled: (layer) => {
      return layer >= 14;
    },
  },
  {
    value: 2,
  },
  {
    value: 2.4,
  },
  {
    value: 2.6,
  },
  {
    value: 2.8,
  },
  {
    value: 3,
  },
  {
    value: 3.2,
  },
];
const valuesWithinRoger = [0.203, 0.305, 0.406, 0.508, 0.813, 1.524];
