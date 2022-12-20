import React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";

const SlideShow = () => {
  // Usint currentSlide state to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const textSlides = ["Slide 1", "Slide 2", "Slide 3"];

  // Use useRef to store reference to the slideshow container element
  const slideshowContainer = useRef(null);

  //  Use useEffect to set ip a timeout that transitions to the next slide
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % textSlides.length);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentSlide]);

  return (
    <>
      <Card
        border="10px double white"
        w="50vw"
        h="50vh"
        bg="green.600"
        align="center"
        ref={slideshowContainer}
      >
        <CardHeader>
          <Heading as="h3" color="whiteAlpha.800">
            Jouluna 2022
          </Heading>
        </CardHeader>
        <CardBody>{textSlides[currentSlide]}</CardBody>
      </Card>
    </>
  );
};

export default SlideShow;
