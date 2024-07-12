import React, { useRef } from "react";
import { PdfViewer } from "./Parts/PdfViewer/PdfViewer";
import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { TbPdf } from "react-icons/tb";
import { pdf } from "@react-pdf/renderer";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import axios from "axios";

export default function Index() {
  const toast = useToast({
    position: "top-right",
    duration: 3000,
    isClosable: true,
  });
  const { category } = useParams();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const uploadPdfToCloudinary = async ({ pdf }) => {
    const formData = new FormData();
    formData.append("file", pdf);
    formData.append("upload_preset", "gkntkfob");
    formData.append("resource_type", "auto");
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/dx7qbndvv/auto/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  };
  const generatePDF = async () => {
    const blob = await pdf(<PdfViewer category="Standard" />).toBlob();
    const file = new File([blob], "document.pdf", { type: "application/pdf" });
    return { file, blob };
  };
  const downloadPdf = async () => {
    const { blob } = await generatePDF();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const sendEmail = async ({ username, email }) => {
    const pdfBase64 = await generatePDF();
    const templateParams = {
      username,
      email,
      pdfBase64: pdfBase64,
    };
    const serviceId = "service_cbag33a";
    const templateId = "template_jzqxqep";
    const userId = "HxIhzpQAa5rMnG2Pz";
    await emailjs.send(serviceId, templateId, templateParams, userId);
  };
  const onSubmit = async (data) => {
    try {
      const pdf = await generatePDF();
      const uploadedPdfLink = await uploadPdfToCloudinary({ pdf });
      const req = await sendEmail({
        username: data.username,
        email: data.email,
      });
      toast({
        title: "send email successfully",
        status: "success",
      });
    } catch (err) {
      toast({
        title: "failed tp send email",
        status: "error",
        description: err.message,
      });
      console.log(err);
    }
  };
  const [isPhoneQuery] = useMediaQuery("(max-width: 900px)");
  return (
    <Flex flexDir={isPhoneQuery && "column-reverse"} w="100%" gap="3">
      <PdfViewer category={category} />
      <Stack
        h="fit-content"
        w="100%"
        p="5"
        borderRadius="md"
        bgColor="gray.100"
      >
        <Heading
          size="md"
          borderBottom="2px"
          borderBottomColor="gray.500"
          p="2"
        >
          Order Form
        </Heading>
        <Flex flexWrap="wrap" gap="3" alignItems="center">
          <Text
            h="100%"
            bgColor="blue.100"
            p="3"
            whiteSpace="wrap"
            borderRadius="lg"
            flexGrow="1"
          >
            If you want to update the order click update button
          </Text>
          <Button
            as={Link}
            to={`/order/customization-form/${category}`}
            flexGrow="1"
            colorScheme="blue"
          >
            Update
          </Button>
        </Flex>
        <Stack>
          <Input
            {...register("username")}
            bgColor="white"
            placeholder="username"
          />
          {errors.username && (
            <Text color="red.600">{errors.username.message}</Text>
          )}
          <Input {...register("email")} bgColor="white" placeholder="email" />
          {errors.email && <Text color="red.600">{errors.email.message}</Text>}
        </Stack>
        <Button
          isLoading={isSubmitting}
          colorScheme="blue"
          onClick={handleSubmit(onSubmit)}
        >
          Requist the order
        </Button>

        <Button onClick={downloadPdf} gap="3" colorScheme="red">
          Download the order as Pdf
          <TbPdf />
        </Button>
        <Heading size="sm">
          The order will be sent to the support mail and they will repond to
          your message of the requested order
        </Heading>
      </Stack>
    </Flex>
  );
}
