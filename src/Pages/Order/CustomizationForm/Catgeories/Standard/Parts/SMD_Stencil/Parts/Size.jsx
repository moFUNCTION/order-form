import React, { useEffect } from "react";
import { Flex, Select, Text } from "@chakra-ui/react";
export const Size = ({
  register,
  name,
  Multi_level_Step_stencil_Value_Selected,
  setValue,
}) => {
  useEffect(() => {
    setValue(name, stencilSizes[0].size);
  }, [Multi_level_Step_stencil_Value_Selected]);
  return (
    <Flex alignItems="center" gap="4">
      <Text flexShrink="0">Size (mm) :</Text>
      <Select
        {...register(name, {
          defaultValue: stencilSizes[0],
        })}
        w="fit-content"
        cursor="pointer"
      >
        {Multi_level_Step_stencil_Value_Selected === "Yes"
          ? stencilSizes.slice(0, 8).map((item) => {
              return (
                <option value={item.size} key={item.proid}>
                  {item.size} {item.validArea}
                </option>
              );
            })
          : stencilSizes.map((item) => {
              return (
                <option value={item.size} key={item.proid}>
                  {item.size} {item.validArea}
                </option>
              );
            })}
      </Select>
    </Flex>
  );
};
const stencilSizes = [
  { size: "370×470mm", proid: "7", validArea: "190×290mm" },
  { size: "420×520mm", proid: "12", validArea: "240×340mm" },
  { size: "450×550mm", proid: "13", validArea: "270×370mm" },
  { size: "584×584mm", proid: "8", validArea: "380×380mm" },
  { size: "550×650mm", proid: "10", validArea: "350×450mm" },
  { size: "736×736mm", proid: "14", validArea: "500×500mm" },
  { size: "400×600mm", proid: "11", validArea: "220×400mm" },
  { size: "400×800mm", proid: "15", validArea: "220×600mm" },
  { size: "400×1000mm", proid: "16", validArea: "220×760mm" },
  { size: "500×800mm", proid: "17", validArea: "320×600mm" },
  { size: "400×1200mm", proid: "18", validArea: "220×1000mm" },
  { size: "400×1400mm", proid: "19", validArea: "220×1200mm" },
  { size: "500×1200mm", proid: "20", validArea: "320×1000mm" },
  { size: "500×1400mm", proid: "21", validArea: "320×1200mm" },
  { size: "190×290mm", proid: "9", validArea: "190×290mm", custom: true },
  { size: "550×550mm", proid: "22", validArea: "550×550mm", custom: true },
];
