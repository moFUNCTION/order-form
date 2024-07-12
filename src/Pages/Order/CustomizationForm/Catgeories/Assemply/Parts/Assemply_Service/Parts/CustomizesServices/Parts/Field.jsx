import { Flex, HStack, Image } from "@chakra-ui/react";
import { useWatch } from "react-hook-form";
import { TextWithPopOver } from "../../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../../../Components/Common/BottonStyled/ButtonStyled";

export const Field = ({
  name,
  label,
  popOverText,
  popOverImage,
  control,
  setValue,
  ...rest
}) => {
  const selectedValue = useWatch({ name, control });
  const HandleChangeValue = (value) => setValue(name, value);
  return (
    <Flex flexWrap="wrap" gap="5" alignItems="center" {...rest}>
      <TextWithPopOver title={label}>
        {popOverText}
        <Image src={popOverImage} />
      </TextWithPopOver>
      <HStack wrap="wrap">
        {["Yes", "No"].map((value, index) => {
          return (
            <ButtonStyled
              isActive={selectedValue === value}
              onClick={() => HandleChangeValue(value)}
              key={index}
              value={value}
              size="sm"
            >
              {value}
            </ButtonStyled>
          );
        })}
      </HStack>
    </Flex>
  );
};
