import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Input,
} from "@chakra-ui/react";
import { Field } from "./Parts/Field";
import { TextWithPopOver } from "../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";

export const CustomizesServices = ({ name, control, setValue, register }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="gray.100" p="3">
            <Flex gap="3" alignItems="center" flex="1" textAlign="left">
              <Heading size="sm">
                Customized Services and Advanced Options
              </Heading>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel overflow="unset" as={Stack} gap="5" pb={4}>
          <Text fontSize="sm" color="yellow.600">
            Below options, their cost is not included in the online quotation
          </Text>
          <Flex gap="4" flexWrap="wrap">
            {fields.map((field, index) => {
              return (
                <Field
                  {...field}
                  key={index}
                  control={control}
                  setValue={setValue}
                  name={`${name}.${field.name}`}
                  flex="1 0 49%"
                />
              );
            })}
          </Flex>
          <HStack gap="5">
            <TextWithPopOver title="Number of X-ray test">
              In PCB manufacturing, X-ray test typically refers to X-ray
              inspection or X-ray detection. It is a non-destructive testing
              technique used to inspect the quality of solder joint connections
              and component placement in electronic products.
            </TextWithPopOver>
            <Input
              type="number"
              {...register(`${name}.NumberOfXRays`)}
              maxW="300px"
            />
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
const fields = [
  {
    name: "DepanelBoards",
    label: "Depanel the boards to delivery",
    popOverText:
      "It is also called sub-board shipment. The panelized PCB is divided into pieces and packaged separately to ship out after the assembly service.",
  },
  {
    name: "FunctionTest",
    label: "Function test",
    popOverText:
      "Functional testing, also known as FCT testing, is the last manufacturing step of PCB creation. Essentially, functional testing makes sure the PCB works correctly. It is done mainly to avoid assembly issues including shorts, opens, missing components or the installation of incorrect parts. Please note your functional test methods and detailed requirements if needed.",
  },
  {
    name: "ConformalCoating",
    label: "Conformal coating",
    popOverText:
      "Conformal coating is a protective coating of thin polymeric film applied to printed circuit boards (PCB). The coating is named conformal since it conforms to the contours of the PCB. Conformal coatings are typically applied at 25-250 μm to the electronic circuitry and provides protection against moisture, dust, chemicals and temperature extremities.",
  },
  {
    name: "FirmwareLoading",
    label: "Firmware loading",
    popOverText:
      "In the PCB industry, firmware loading typically refers to the process of loading a previously written program, or firmware, onto the chips on the PCB. During PCB manufacturing, different types of chips are often combined together to achieve specific functionalities. In order for the chips to function properly, the corresponding firmware needs to be loaded onto them.",
  },
  {
    name: "PressfitParts",
    label: "Press-fit assembly",
    popOverText:
      "Press-fit assembly is an electronic manufacturing technology used to establish mechanical and electrical connections between circuit boards and components without the need for soldering. It involves inserting connector pins into the gold-plated through-holes on the circuit board and applying a certain amount of force to establish the connection. This technology eliminates some of the issues that arise in traditional soldering processes, such as broken or cold soldered pins, resulting in improved reliability and durability of the connector components.",
    popOverImage:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/msgfile/23/04/28/1558057791611t.png",
  },
  {
    name: "BoxBuildAssembly",
    label: "Box build assembly",
    popOverText:
      "It is also known as systems integration. It is a full process service from designing and manufacturing the enclosure, installing a PCBA, installing cables and the cable harness assembly, and even installing electrical and/or pneumatic systems.",
  },
  {
    name: "CableWireHarnessAssembly",
    label: "Cable wire harness assembly",
    popOverText:
      "A cable assembly is a group of wires or cables covered by an exterior sleeve made from a variety of material. A wire harness is a single cable covered by an exterior sleeve. We can provide standard and simple wiring harness assembly, or custom wire harnesses assembly and cable assembly at shortest turnaround times.",
    popOverImage:
      "https://pcbwayfile.s3.us-west-2.amazonaws.com/web/240617/Cable-wire-img.png",
  },
  {
    name: "SMTCustompackaging",
    label: "Custom packaging",
    popOverText: "Customize your own special packaging for your products.",
  },
];
