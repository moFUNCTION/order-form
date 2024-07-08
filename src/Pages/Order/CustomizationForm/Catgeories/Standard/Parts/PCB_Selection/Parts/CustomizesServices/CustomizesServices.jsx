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
  Select,
  Stack,
  Image,
  Divider,
  Checkbox,
  useMediaQuery,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import ULMarketingImage from "../../../../../../../../../Assets/1443478903841t.png";
import ULMarketingImage2 from "../../../../../../../../../Assets/17_ulmark.png";
import { CustomizeServicesOptions } from "./CustomizedServicesOptions";
import { useFieldArray, useWatch } from "react-hook-form";
export const CustomizesServices = ({ register, name, control, setValue }) => {
  const [isPhoneQuery] = useMediaQuery("(max-width: 700px)");
  const feuturesSelected = useWatch({
    control,
    name: `${name}.feuturesSelected`,
  });
  const HandleChangeFeuturesSelected = ({ isChecked, value }) => {
    const HandleAdd = () => {
      setValue(`${name}.feuturesSelected`, [...feuturesSelected, value]);
    };
    const HandleDelete = () => {
      setValue(
        `${name}.feuturesSelected`,
        feuturesSelected.filter((feuture) => {
          return feuture !== value;
        })
      );
    };
    if (isChecked) {
      HandleAdd();
    } else {
      HandleDelete();
    }
  };
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="gray.100" p="3">
            <Flex gap="3" alignItems="center" flex="1" textAlign="left">
              <Heading size="sm">
                Customized Services and Advanced Options
              </Heading>
              <Text color="yellow.700" fontSize="sm" mr="auto">
                (Castellated holes,Edge plating,Impedance control...)
              </Text>
            </Flex>

            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel overflow="unset" as={Stack} gap="5" pb={4}>
          <Text color="gray.700">
            We may add extra cost for these special options which will be
            confirmed after review.
          </Text>
          <Flex flexWrap="wrap" alignItems="center" gap="3">
            <Flex gap="3">
              <TextWithPopOver flexShrink="0" title="Peelable soldermask : ">
                Also known as a blue peelable mask, it is used to protect the
                required solder pads during assembly and is typically referred
                to as GTPM and GBPM in design. Unlike green soldermask, which is
                a negative image and is permanently present on the PCB in PCB
                design, Peelable Soldermask is a positive image (what you see is
                what you get in your design) and is temporarily used for PCB
                manufacturing and assembly. Coating material could be removed
                after board through wave soldering.
              </TextWithPopOver>
              <Select {...register(`${name}.peelable_soldermask`)}>
                {["None", "Top Side", "Bottom Side", "Both Sides"].map(
                  (value) => {
                    return (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    );
                  }
                )}
              </Select>
            </Flex>
            <Flex gap="3">
              <TextWithPopOver flexShrink="0" title="Hole copper thickness : ">
                Also known as a blue peelable mask, it is used to protect the
                required solder pads during assembly and is typically referred
                to as GTPM and GBPM in design. Unlike green soldermask, which is
                a negative image and is permanently present on the PCB in PCB
                design, Peelable Soldermask is a positive image (what you see is
                what you get in your design) and is temporarily used for PCB
                manufacturing and assembly. Coating material could be removed
                after board through wave soldering.
              </TextWithPopOver>
              <Select {...register(`${name}.Hole_Copper_Thickness`)}>
                {[
                  "None",
                  "20um",
                  "25um",
                  "30um",
                  "35um",
                  "50um",
                  "55um",
                  "70um",
                ].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Flex>
          <Divider />
          <Flex flexWrap="wrap" gap="5" alignItems="center">
            <Flex gap="3" alignItems="center">
              <TextWithPopOver flexShrink="0" title="UL marking:">
                PCBWay has obtained UL certification, please choose to add the
                corresponding logo on the layer you need. We will add the logo
                JDB-D if it is a two-layer board, and add JDB-M if it is a
                multilayer board.For single layer metal base PCB,we will add
                corresponding UL（JDB-A1,JDB-A2,JDB-A3 as required.
                <Image src={ULMarketingImage} w="100%" />
              </TextWithPopOver>
              <Image src={ULMarketingImage2} w="30px" objectFit="contain" />
              <Select {...register(`${name}.UL_Marking`)}>
                {[
                  "None",
                  "Yes - add to top silkscreen",
                  "Yes - add to bottom silkscreen",
                  "Yes - add to top soldermask",
                  "Yes - add to bottom soldermask",
                  "Yes - add to top copper",
                  "Yes - add to bottom copper",
                  "Yes - as PCBWay default",
                ].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </Select>
            </Flex>
            <Flex gap="3" alignItems="center">
              <TextWithPopOver flexShrink="0" title="Date code">
                Add the production time on the PCB
              </TextWithPopOver>
              <Select {...register(`${name}.Date_Code`)}>
                {[
                  "None",
                  "Add as PCBWay prefer",
                  "Add as customer's required",
                  "Update the designed date code",
                ].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Flex>
          <Divider />
          <Flex flexWrap="wrap" gap="7">
            {CustomizeServicesOptions.map((item, index) => {
              const isChecked = feuturesSelected?.find((feuture) => {
                feuture === item.label;
              });
              return (
                <Flex
                  flex={!isPhoneQuery && "1 0 30%"}
                  maxW={!isPhoneQuery && "30%"}
                  key={index}
                >
                  <Checkbox
                    isChecked={isChecked}
                    onChange={(e) =>
                      HandleChangeFeuturesSelected({
                        isChecked: e.target.checked,
                        value: item.label,
                      })
                    }
                  >
                    <TextWithPopOver title={item.label}>
                      {item.description}
                      <Image w="100%" src={item.imgSrc} />
                    </TextWithPopOver>
                  </Checkbox>
                </Flex>
              );
            })}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
