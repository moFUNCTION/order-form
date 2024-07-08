import React from "react";
import { Header } from "./Parts/Header";
import {
  Flex,
  Stack,
  Divider,
  Button,
  Checkbox,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
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
import { SolderMaskColor } from "./Parts/SolderMaskColor";
import { SilkScreenColor } from "./Parts/SilkScreenColor";
import { UV_printing_Multi_color } from "./Parts/UV_printing_Multi_color";
import { EdgeConnector } from "./Parts/EdgeConnector";
import { SurfaceFinish } from "./Parts/SurfaceFinish";
import { ViaProccess } from "./Parts/ViaProccess";
import { FinishedCopper } from "./Parts/FinishedCopper";
import { RemoveProduct } from "./Parts/RemoveProduct";
import { CustomizesServices } from "./Parts/CustomizesServices/CustomizesServices";
import { SpecialRequest } from "./Parts/SpecialRequest";

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
  selectable,
}) => {
  return (
    <PCB_Selection_Wrapper control={control} setValue={setValue}>
      <Stack gap="0" p="0" as={selectable && AccordionItem}>
        {selectable ? (
          <AccordionButton>
            <Header />
          </AccordionButton>
        ) : (
          <Header />
        )}
        <Stack p="0" gap="0" as={selectable && AccordionPanel}>
          <Stack p="4" bgColor="gray.100">
            <BoardType
              register={register}
              name="PCB_Specification_Selection.BoardType"
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
              name="PCB_Specification_Selection.minHoleSize"
              setValue={setValue}
              errors={errors?.minHoleSize}
            />
            <SolderMaskColor />
            <SilkScreenColor
              control={control}
              name="PCB_Specification_Selection.silkScreenColor"
              setValue={setValue}
              errors={errors?.silkScreenColor}
            />
            <UV_printing_Multi_color
              control={control}
              setValue={setValue}
              name="PCB_Specification_Selection.UV_printing_Multi_color"
              errors={errors?.UV_printing_Multi_color}
            />
            <EdgeConnector
              name="PCB_Specification_Selection.EdgeConnector"
              register={register}
            />
            <SurfaceFinish
              control={control}
              setValue={setValue}
              name="PCB_Specification_Selection.Surface_finish"
              errors={errors?.Surface_finish}
            />
            <ViaProccess
              control={control}
              setValue={setValue}
              name="PCB_Specification_Selection.ViaProcess"
              errors={errors?.ViaProcess}
            />
            <FinishedCopper
              control={control}
              setValue={setValue}
              name="PCB_Specification_Selection.FinisedCopper"
              errors={errors?.FinishedCopper}
            />
            <RemoveProduct
              control={control}
              setValue={setValue}
              name="PCB_Specification_Selection.RemoveProduct"
              errors={errors?.RemoveProduct}
            />
            <CustomizesServices
              name="PCB_Specification_Selection.CustomizesServices"
              register={register}
              control={control}
              setValue={setValue}
            />
            <SpecialRequest
              register={register}
              name="PCB_Specification_Selection.specialRequest"
            />
          </Stack>
        </Stack>
      </Stack>
    </PCB_Selection_Wrapper>
  );
};
