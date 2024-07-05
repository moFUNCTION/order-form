import { Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import StandardImage from "../../../../../Assets/standard_pcb_online.png";
import AssemplyImage from "../../../../../Assets/smt.png";
import { CategoryBox } from "./CategoryBox";
export const CategoriesFilter = () => {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <Flex
      pos={isSticky ? "sticky" : "relative"}
      top="0"
      w="100%"
      zIndex="100"
      borderRadius="lg"
      gap="4"
      flexWrap="wrap"
      p="5"
      bgColor="gray.100"
    >
      {categories.map((category, index) => {
        return <CategoryBox key={index} {...category} />;
      })}
      <Button
        onClick={() => {
          setIsSticky(!isSticky);
        }}
        colorScheme="blue"
        ml="auto"
        mt="auto"
        mb="auto"
      >
        {isSticky ? "make it non sticky" : "Make the header sticky"}
      </Button>
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
