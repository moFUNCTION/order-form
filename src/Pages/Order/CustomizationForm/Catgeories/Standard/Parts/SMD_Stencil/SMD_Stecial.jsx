import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "./Parts/Header";
import { StencilType } from "./Parts/StencilType";
import { useWatch } from "react-hook-form";
import { MultiLevelStepStencil } from "./Parts/MultiLevelStepStencil";
import { Size } from "./Parts/Size";
import { Stencil_Side } from "./Parts/Stencil_Side";

export const SMD_Stecial = ({
  formState: {
    errors: { PCB_Specification_Selection: errors },
  },
  register,
  control,
  getValues,
  setValue,
  reset,
  trigger,
  selectable,
}) => {
  const StencilTypeSelected = useWatch({
    control,
    name: "SMD_Stecial.Stencil_type",
  });
  const HandleChangeStencilType = (value) =>
    setValue("SMD_Stecial.Stencil_type", value);
  const Multi_level_Step_stencil = useWatch({
    control,
    name: "SMD_Stecial.Multi_level_Step_stencil",
  });
  const HandleChange_Multi_level_Step_stencil = (value) =>
    setValue("SMD_Stecial.Multi_level_Step_stencil", value);
  return (
    <AccordionItem>
      {({ isExpanded }) => {
        setValue("SMD_Stecial.isEnabled", isExpanded);
        return (
          <>
            <h2>
              <AccordionButton>
                <Header isOpened={isExpanded} />
              </AccordionButton>
            </h2>
            <AccordionPanel gap="8" as={Stack} p="4" pb={4}>
              <StencilType
                onChange={HandleChangeStencilType}
                selectedValue={StencilTypeSelected}
              />
              {StencilTypeSelected === "Framework" && (
                <MultiLevelStepStencil
                  onChange={HandleChange_Multi_level_Step_stencil}
                  selectedValue={Multi_level_Step_stencil}
                />
              )}
              <Size
                register={register}
                Multi_level_Step_stencil_Value_Selected={
                  Multi_level_Step_stencil
                }
                name="SMD_Stecial.Size"
                setValue={setValue}
              />
              <Stencil_Side
                control={control}
                name="SMD_Stecial.Stencil_Side"
                setValue={setValue}
              />
            </AccordionPanel>
          </>
        );
      }}
    </AccordionItem>
  );
};
