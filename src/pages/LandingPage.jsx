import React from "react";
import SlideShow from "../components/SlideShow";

import { useState, useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  Fade,
  ScaleFade,
  Card,
  Text,
  Button,
} from "@chakra-ui/react";

const LandingPage = () => {
  const [index, setIndex] = useState(0);

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
          <ScaleFade initialScale={0.9} in={true}>
            <Flex
              w="50vw"
              h="60vh"
              direction="column"
              align="center"
              justify="center"
              border="2px dottend yellow"
            >
              <SlideShow />
            </Flex>
          </ScaleFade>
        </Card>
      </Flex>
    </>
  );
};

export default LandingPage;
