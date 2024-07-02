import {
  Flex,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import { ButtonStyled } from "../../../../../../../../Components/Common/BottonStyled/ButtonStyled";
import BoardTypeImage from "../../../../../../../../Assets/Board-type.png";
import XAllowanceImage from "../../.../../../../../../../../Assets/1649407767351.png";
import BreakAwayRail from "../../../../../../../../Assets/1821380555816.png";
import { useWatch } from "react-hook-form";
import RoutesProccessImage from "../../../../../../../../Assets/Board-type-img.png";
export const BoardType = ({ errors, register, control, name, setValue }) => {
  const [BoardType, X_out_Allowance, Break_away_rail] = useWatch({
    control,
    name: [
      `${name}.type`,
      `${name}.X_out_Allowance`,
      `${name}.Break_away_rail`,
    ],
  });
  const DeleteValues = (...values) => {
    values.forEach((item) => {
      setValue(item, undefined);
    });
  };
  const HandleChangeBoardType = (value) => {
    setValue(`${name}.type`, value);
    switch (value) {
      case "Single-pieces":
        {
          DeleteValues(
            `${name}.X_out_Allowance`,
            `${name}.Panel_requirements`,
            `${name}.Break_away_rail`,
            `${name}.Route_Process`
          );
        }
        break;
      case "Panel-by-Customer": {
        DeleteValues(
          `${name}.Panel_requirements`,
          `${name}.Break_away_rail`,
          `${name}.Route_Process`
        );
      }
    }
  };
  const HandleChangeX_Out_Allowance = (value) => {
    setValue(`${name}.X_out_Allowance`, value);
  };
  const HandleChange_Break_away_rail = (value) => {
    setValue(`${name}.Break_away_rail`, value);
  };
  return (
    <>
      <Flex alignItems="center" flexWrap="wrap" gap="10">
        <TextWithPopOver title="Board Type" popOverHeader="Content">
          PCBs will be shipped in single pieces or in panel. For bulk assembly
          orders (quantity greater than 30), we recommend shipping in panel,
          which will improve the assembly efficiency. Learn More
          <Image src={BoardTypeImage} w="100%" />
        </TextWithPopOver>
        <Flex flexWrap="wrap" gap="4">
          {[
            { title: "single pieces", value: "Single-pieces" },
            { title: "Panel by Customer", value: "Panel-by-Customer" },
            { title: "Panel by PCBWay", value: "Panel-by-PCBWay" },
          ].map((child, index) => {
            return (
              <ButtonStyled
                size="md"
                key={index}
                isActive={BoardType === child.value}
                onClick={() => HandleChangeBoardType(child.value)}
              >
                {child.title}
              </ButtonStyled>
            );
          })}
        </Flex>
      </Flex>
      {BoardType === "Panel-by-Customer" && (
        <Flex
          borderRadius="lg"
          p="4"
          alignItems="center"
          justifyContent="center"
          gap="4"
          bgColor="white"
          w="100%"
        >
          <TextWithPopOver
            popOverHeader="Content"
            title="X-out Allowance in Panel"
          >
            Bad PCBs may exist in the panel, the quotation will increase by
            about 30% if X-out Allowance is not accepted. Learn More
            <Image src={XAllowanceImage} />
          </TextWithPopOver>
          <RadioGroup
            value={X_out_Allowance}
            onChange={HandleChangeX_Out_Allowance}
          >
            <HStack gap="4">
              <Radio value="Accept">Accept</Radio>
              <Radio value="Not-Accept">Not Accept</Radio>
            </HStack>
          </RadioGroup>
        </Flex>
      )}
      {BoardType === "Panel-by-PCBWay" && (
        <Stack
          borderRadius="lg"
          p="4"
          alignItems="center"
          justifyContent="center"
          gap="5"
          bgColor="white"
          w="100%"
        >
          <Flex gap="5" w="100%">
            <Text fontSize="sm">Panel requirements:</Text>
            <Stack>
              <Textarea
                {...register(`${name}.Panel_requirements`)}
                maxH="300px"
                placeholder="Panel requirements"
              />
              <Text fontSize="sm">
                (e.g. Panel in 2*3, size of the break-away rail, total 5
                panels=total 30 individual boards)
              </Text>
            </Stack>
          </Flex>
          <Flex w="100%" gap="4">
            <TextWithPopOver title="Break-away rail">
              Break-away rails are long strip blank plate edges set up to leave
              out the track transmission space during assembly and place the
              mark point in the panel. PCBs are transmitted through the guide
              rail on the assembly production line, therefore, a pair of edges
              that forbid placing components must be left as the transmission
              edge. The width of the breakaway rail is generally about 5-8mm.
              <Image src={BreakAwayRail} w="100%" />
            </TextWithPopOver>
            <RadioGroup
              value={Break_away_rail}
              onChange={HandleChange_Break_away_rail}
            >
              <HStack gap="4">
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </HStack>
            </RadioGroup>
          </Flex>
          <Flex gap="4" alignItems="center" w="100%">
            <Flex alignItems="center" gap="4">
              <TextWithPopOver title="Route Process">
                In the panel, the PCBs are connected as shown in the following
                diagram:
                <Image src={RoutesProccessImage} w="100%" />
              </TextWithPopOver>
              <Select
                {...register(`${name}.Route_Process`, {
                  defaultValue: "Panel-as-PCBWay",
                })}
              >
                <option value="Panel-as-PCBWay">Panel as PCBWay</option>
                <option value="Panel-as-V-Scoring">Panel as V Scoring</option>
                <option value="Panel-as-Tab-Route">Panel as Tab Route</option>
                <option value="Both-V-Scoring&Tab-routing">
                  Both V Scoring&Tab routing
                </option>
              </Select>
            </Flex>
            <Flex
              borderRadius="lg"
              p="4"
              alignItems="center"
              gap="4"
              bgColor="white"
            >
              <TextWithPopOver
                popOverHeader="Content"
                title="X-out Allowance in Panel"
              >
                Bad PCBs may exist in the panel, the quotation will increase by
                about 30% if X-out Allowance is not accepted. Learn More
                <Image src={XAllowanceImage} />
              </TextWithPopOver>
              <RadioGroup
                value={X_out_Allowance}
                onChange={HandleChangeX_Out_Allowance}
              >
                <HStack gap="4">
                  <Radio value="Accept">Accept</Radio>
                  <Radio value="Not-Accept">Not Accept</Radio>
                </HStack>
              </RadioGroup>
            </Flex>
          </Flex>
        </Stack>
      )}
    </>
  );
};
