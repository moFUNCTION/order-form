import { Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BreadcrumbLayout } from "../../Components/Layout/Breadcrumb/Breadcrumb";

export default function Index() {
  return (
    <Stack
      p="3"
      m="0 auto"
      minH="100vh"
      alignItems="start"
      justifyContent="start"
      w="100%"
      maxW="1200px"
    >
      <BreadcrumbLayout Links={Links} />
      <Outlet />
    </Stack>
  );
}

const Links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Online Quote",
    href: "customization-form",
  },
  {
    title: "Request this type of product",
    href: "request",
  },
];
