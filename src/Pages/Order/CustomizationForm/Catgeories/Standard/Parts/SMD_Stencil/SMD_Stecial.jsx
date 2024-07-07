import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "./Parts/Header";
export const SMD_Stecial = () => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Header isOpened={isExpanded} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
