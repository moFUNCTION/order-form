import React from "react";
import { Header } from "./Parts/Header";
import { Flex, Stack, Divider } from "@chakra-ui/react";
import { BoardType } from "./Parts/BoardType";
import { DesignInPanel } from "./Parts/DesignInPanel";
import { TotalSize } from "./Parts/TotalSize";
import { Quantity } from "./Parts/Quantity";
import { Layers } from "./Parts/Layers";
import { CopperLayer } from "./Parts/CopperLayer";
import { SolderMask } from "./Parts/SolderMask";
import { Silkscreen } from "./Parts/Silkscreen";
import { MaterialType } from "./Parts/MaterialType";

export const PCB_Selection_Form = () => {
  return (
    <>
      <Header />
      <Stack p="4" bgColor="gray.100">
        <BoardType />
        <Divider />
        <DesignInPanel />
        <Divider />
        <TotalSize />
        <Divider />
        <Quantity />
        <Divider />
        <Layers />
        <Divider />
        <Flex flexWrap="wrap" gap="4">
          <CopperLayer />
          <SolderMask />
          <Silkscreen />
        </Flex>
      </Stack>
      <Stack p="4">
        <MaterialType />
      </Stack>
    </>
  );
};
