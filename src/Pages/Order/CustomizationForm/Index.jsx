import { Heading, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { CategoriesFilter } from "./Components/CategoriesFilter/CategoriesFilter";
export default function Index() {
  return (
    <Stack w="100%">
      <CategoriesFilter />
      <Outlet />
    </Stack>
  );
}
