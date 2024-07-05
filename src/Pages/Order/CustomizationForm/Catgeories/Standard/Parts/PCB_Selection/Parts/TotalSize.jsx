import React, { useRef } from "react";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputLeftAddon,
} from "@chakra-ui/react";
import { TextWithPopOver } from "../../../../../../../../Components/Common/TextWithPopOver/TextWithPopOver";
import sizePanelImage from "../../../../../../../../Assets/xy-sizepanel.png";
import { MdArrowRight } from "react-icons/md";
import { useWatch } from "react-hook-form";
import { useBoardType } from "../../../../../../../../Context/PCB_Sekections_Wrapper/PCB_Selection_Wrapper";
const InchToMilliModal = ({ onClose, isOpen, onSubmit }) => {
  const formRef = useRef();
  const HandleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      x: Number(formRef.current.x_inch.value),
      y: Number(formRef.current.y_inch.value),
    });
    onClose();
    formRef.current.reset();
  };
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent ref={formRef} as="form">
        <ModalHeader>Inch ⇒ mm Conversion</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          If you enter in units of inches and press the [Convert] button, it
          will be converted into units of millimeters in the quotation form.
          <Flex gap="3" mt="3">
            <InputGroup>
              <InputLeftAddon>X</InputLeftAddon>
              <Input type="number" name="x_inch" />
              <InputRightAddon>Inch</InputRightAddon>
            </InputGroup>
            <InputGroup>
              <InputLeftAddon>Y</InputLeftAddon>
              <Input type="number" name="y_inch" />
              <InputRightAddon>Inch</InputRightAddon>
            </InputGroup>
          </Flex>
        </ModalBody>

        <ModalFooter gap="3">
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
          <Button onClick={HandleSubmit} type="submit" colorScheme="blue">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export const TotalSize = ({ register, setValue, name }) => {
  const {
    isOpen: isOpenedInchToMilliModal,
    onClose: onCloseInchToMilliModal,
    onOpen: onOpenInchToMilliModal,
  } = useDisclosure();
  const HandleChangeFromInchToMilli = (value) => {
    setValue(`${name}.x`, value.x * 25.4);
    setValue(`${name}.y`, value.y * 25.4);
  };
  const {
    values: { boardType },
  } = useBoardType();
  return (
    <>
      <InchToMilliModal
        isOpen={isOpenedInchToMilliModal}
        onClose={onCloseInchToMilliModal}
        onSubmit={HandleChangeFromInchToMilli}
      />
      <Flex alignItems="center" w="100%" gap="10" flexWrap="wrap">
        <TextWithPopOver
          title={`Size (${
            boardType === "Panel-by-Customer" ? "sets" : "single"
          }):`}
          popOverHeader="Content"
        >
          The board size refers to the length and width of the board ordered by
          the customer. If it is a circular board, the length and width are the
          diameter of the circle; If it is a board with irregular shape, the
          length and width are measured according to the largest shape range.
        </TextWithPopOver>
        <Flex alignItems="center" flexWrap="wrap" gap="4">
          <InputGroup w="150px" flexGrow="1">
            <Input
              {...register(`${name}.x`, {
                valueAsNumber: true,
              })}
              type="number"
              bgColor="white"
              placeholder="length"
            />
            <InputRightAddon bgColor="gray.300">X</InputRightAddon>
          </InputGroup>
          <InputGroup w="150px" flexGrow="1">
            <Input
              {...register(`${name}.y`, {
                valueAsNumber: true,
              })}
              type="number"
              bgColor="white"
              placeholder="width"
            />
            <InputRightAddon bgColor="gray.300">Y</InputRightAddon>
          </InputGroup>
          <Button onClick={onOpenInchToMilliModal} colorScheme="blue">
            inch <MdArrowRight /> mm
          </Button>
          <Image src={sizePanelImage} w="100%" maxW="150px" />
        </Flex>
      </Flex>
    </>
  );
};
