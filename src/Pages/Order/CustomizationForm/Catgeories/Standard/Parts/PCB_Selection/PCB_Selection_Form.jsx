import React from "react";
import { Header } from "./Parts/Header";
import { Flex, Stack, Divider, Button } from "@chakra-ui/react";
import { BoardType } from "./Parts/BoardType";
import { DesignInPanel } from "./Parts/DesignInPanel";
import { TotalSize } from "./Parts/TotalSize";
import { Quantity } from "./Parts/Quantity";
import { Layers } from "./Parts/Layers";
import { CopperLayer } from "./Parts/CopperLayer";
import { SolderMask } from "./Parts/SolderMask";
import { Silkscreen } from "./Parts/Silkscreen";
import { MaterialType } from "./Parts/MaterialType";
import { set, useWatch } from "react-hook-form";
import { MinTrackSpacing } from "./Parts/MinTrackSpacing";
import { MinHoleSize } from "./Parts/MinHoleSize";
import { PCB_Selection_Wrapper } from "../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";

export const PCB_Selection_Form = ({
  formState: {
    errors: { PCB_Specification_Selection: errors },
  },
  register,
  control,
  getValues,
  setValue,
  reset,
  trigger,
}) => {
  return (
    <PCB_Selection_Wrapper control={control} setValue={setValue}>
      <Header />
      <Stack p="4" bgColor="gray.100">
        <BoardType
          register={register}
          control={control}
          name="PCB_Specification_Selection.BoardType"
          setValue={setValue}
          errors={errors?.BoardType}
          reset={reset}
        />
        <Divider />
        <DesignInPanel
          control={control}
          setValue={setValue}
          register={register}
          errors={errors?.Different_design_in_panel}
          name="PCB_Specification_Selection.Different_design_in_panel"
        />
        <Divider />
        <TotalSize
          register={register}
          control={control}
          name="PCB_Specification_Selection.Size"
          parentName="PCB_Specification_Selection"
          setValue={setValue}
          errors={errors?.Size}
        />
        <Divider />
        <Quantity
          register={register}
          control={control}
          name="PCB_Specification_Selection.Quantity"
          parentName="PCB_Specification_Selection"
          setValue={setValue}
          errors={errors?.Quantity}
        />
        <Divider />
        <Layers
          register={register}
          control={control}
          name="PCB_Specification_Selection.Layers"
          parentName="PCB_Specification_Selection"
          setValue={setValue}
          errors={errors?.Layers}
        />
        <Divider />
      </Stack>
      <Stack p="4">
        <MaterialType
          register={register}
          control={control}
          name="PCB_Specification_Selection.material"
          parentName="PCB_Specification_Selection"
          setValue={setValue}
          errors={errors?.material}
        />
      </Stack>
      <Stack gap="4" p="4">
        <MinTrackSpacing
          register={register}
          control={control}
          name="PCB_Specification_Selection.minTrackSpacing"
          parentName="PCB_Specification_Selection"
          setValue={setValue}
          errors={errors?.minTrackSpacing}
        />
        <MinHoleSize
          register={register}
          control={control}
          name="PCB_Specification_Selection.minTrackSpacing"
          setValue={setValue}
          errors={errors?.minTrackSpacing}
        />
      </Stack>
    </PCB_Selection_Wrapper>
  );
};
