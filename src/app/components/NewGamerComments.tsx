"use client";

import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Avatar,
  Image,
  HStack,
  Center,
} from "@chakra-ui/react";
import { fonts } from "../fonts";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <HStack>{children}</HStack>;
};

const LeftTestimonialContent = (props: Props) => {
  const { children } = props;
  return (
    <Stack
      bg="rgb(142, 53, 28)"
      boxShadow={"lg"}
      p={8}
      mt="20px"
      mb="20px"
      w={{ base: "260px", md: "500px" }}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 20,
        borderRight: "solid transparent",
        borderRightWidth: 25,
        borderTop: "solid",
        borderTopWidth: 30,
        borderTopColor: "rgb(142, 53, 28)",
        pos: "absolute",
        top: "50%",
        left: "-30px",
        transform: "translateY(-50%)  rotate(90deg)",
      }}
    >
      {children}
    </Stack>
  );
};

const RightTestimonialContent = (props: Props) => {
  const { children } = props;
  return (
    <Stack
      bg="rgb(142, 53, 28)"
      boxShadow={"lg"}
      p={8}
      w={{ base: "250px", md: "550px" }}
      h={170}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 20,
        borderRight: "solid transparent",
        borderRightWidth: 25,
        borderTop: "solid",
        borderTopWidth: 30,
        borderTopColor: "rgb(142, 53, 28)",
        pos: "absolute",
        top: "30%",
        right: "-30px",
        transform: "translateY(-50%)  rotate(-90deg)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      h={{ base: "80px" }}
      w={{ base: "100%" }}
      textAlign={"left"}
      color="whiteAlpha.800"
      fontSize={{ base: "13px", md: "18px" }}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} color="rgb(142, 53, 28)">{name}</Text>
        <Text fontSize={"sm"} color="rgb(142, 53, 28)">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function GamerReviews() {
  return (
    <Box>
      <Container maxW={"7xl"} as={Stack} mt="20px">
      <Center>
          <Image src="star.png" objectFit="cover" h="30px" mr="10px" />
          <Text
            fontFamily={fonts.ruiziFont.style.fontFamily}
            fontSize={{ base: "20px", md: "50px" }}
            color="rgb(142, 53, 28)"
          >
            PLAYER REVIEWS
          </Text>
          <Image src="star.png" objectFit="cover" h="30px" ml="10px" />
        </Center>
        <Stack direction={["column"]} justify={["center"]} align={["center"]}>
          <Center>
            <Testimonial>
              <TestimonialAvatar
                src={"https://pics.narutostorm.com/yukihiro.png"}
                name={"Yukihiro"}
                title={"from Tokyo"}
              />
              <LeftTestimonialContent>
                <TestimonialText>
                  Man, this pixel-art Naruto RPG is awesome! It captures the
                  vibe of the classic anime perfectly while making it fun.And
                  the soundtrack? Totally retro!
                </TestimonialText>
              </LeftTestimonialContent>
            </Testimonial>
          </Center>
          <Center>
            <Testimonial>
              <RightTestimonialContent>
                <TestimonialText>
                  This pixel-style Naruto RPG is awesome! It's perfect for
                  anyone who loves Naruto and wants something fresh but
                  nostalgic. Definitely worth a try!
                </TestimonialText>
              </RightTestimonialContent>
              <TestimonialAvatar
                src={"https://pics.narutostorm.com/marco.png"}
                name={"Marco"}
                title={"from Los Angeles"}
              />
            </Testimonial>
          </Center>
          {/* <Center>
            <Testimonial>
              <TestimonialAvatar
                src={"https://pics.narutostorm.com/sabrina.png"}
                name={"Sabrina"}
                title={"from Seoul"}
              />
              <LeftTestimonialContent>
                <TestimonialText>
                  I've been watching Naruto, but when it comes out in a game
                  like this, l feel like i'm back in my childhood.
                </TestimonialText>
              </LeftTestimonialContent>
            </Testimonial>
          </Center> */}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        ></Stack>
      </Container>
    </Box>
  );
}
