import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import StandardImage from "../../../../../Assets/standard_pcb_online.png";
import AssemplyImage from "../../../../../Assets/smt.png";
import { CategoryBox } from "./CategoryBox";
export const CategoriesFilter = () => {
  return (
    <Flex borderRadius="lg" gap="4" flexWrap="wrap" p="5" bgColor="gray.100">
      {categories.map((category, index) => {
        return <CategoryBox key={index} {...category} />;
      })}
    </Flex>
  );
};
const categories = [
  {
    title: "Standard PCB",
    image: StandardImage,
    href: "/order/customization-form/standard",
  },
  {
    title: "Assembly",
    image: AssemplyImage,
    href: "/order/customization-form/assembly",
  },
];
