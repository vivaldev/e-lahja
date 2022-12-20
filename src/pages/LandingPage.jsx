import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Fade,
  ScaleFade,
  Card,
  Text,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

// create setInterval to fade out the text

const IntervalMessages = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleShow();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Button size="lg" bg="whiteAlpha.700" onClick={onToggle}>
        Aloita Joulu
      </Button>
      <ScaleFade in={isOpen} initialScale={0.1}>
        <Heading color="white">Hyvää Joulua, Rakkaani!</Heading>
      </ScaleFade>
    </>
  );
};

const LandingPage = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <Flex w="100vw" h="100vh" bg="red.600" align="center" justify="center">
        <Card
          border="10px double white"
          direction="column"
          align="center"
          justify="center"
          bg="green.600"
          w="50%"
          h="50%"
          p="10"
        >
          <IntervalMessages />
        </Card>
      </Flex>
    </>
  );
};

export default LandingPage;
