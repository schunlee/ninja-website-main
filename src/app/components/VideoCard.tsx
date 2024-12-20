"use client";
import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";

interface Props {
  hoverPic: string;
  title: string;
}

const VideoCard = ({ hoverPic, title }: Props) => {
  const [show, setShow] = useState(false);

  function clickHandler() {
    console.log(show);

    setShow(!show);
  }

  return (
    <Box
      maxW={"450px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box h={"210px"}>
        <Image
          src={hoverPic}
          alt="naruto"
          objectFit="cover"
          h="100%"
          w="100%"
        />
      </Box>
      <HStack
        bg="rgb(142, 53, 28)"
        px="30px"
        py="20px"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
      >
        <Heading color="whiteAlpha.800" fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Spacer />
        <Box onClick={clickHandler}>
          {show ? (
            <FaArrowAltCircleDown
              style={{ fontSize: "2rem", color: "white" }}
            />
          ) : (
            <FaArrowAltCircleRight
              style={{ fontSize: "2rem", color: "white" }}
            />
          )}
        </Box>
      </HStack>
      <Box
        mt="-5px"
        height={{ base: "280px", md: "250px" }}
        borderBottom="1px"
        borderLeft="1px"
        borderRight="1px"
        fontWeight="semibold"
        bg="transparent"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
        borderColor="rgb(142, 53, 28)"
        display={show ? "block" : "none"} // none
      >
        <Stack spacing={0}>
          <HStack px="50px" spacing={0}>
            <Center>
              <Image
                src="https://pics.narutostorm.com/Crunchyroll.png"
                alt="crunchyroll"
                w="40%"
              />
              <Spacer />
              <Link href="https://www.crunchyroll.com/search?from=videos&q=NARUTO">
                <IoPlayForward
                  style={{
                    fontSize: "2rem",
                    color: "rgb(142, 53, 28)",
                  }}
                />
              </Link>
            </Center>
          </HStack>
          <HStack px="50px" spacing={0} mt={{ base: "-5px", md: "-40px" }}>
            <Center>
              <Image
                src="https://pics.narutostorm.com/KKTV.png"
                alt="kktv"
                w="30%"
              />
              <Spacer />
              <Link href="https://www.kktv.me/titles/06000502">
                <IoPlayForward
                  style={{
                    fontSize: "2rem",
                    color: "rgb(142, 53, 28)",
                  }}
                />
              </Link>
            </Center>
          </HStack>
          <HStack px="50px" spacing={0} mt={{ base: "-5px", md: "-30px" }}>
            <Center>
              <Image
                src="https://pics.narutostorm.com/pluto.png"
                alt="pluto"
                w="30%"
              />
              <Spacer />
              <Link href="https://pluto.tv/us/search/details/channels/5da0c85bd2c9c10009370984">
                <IoPlayForward
                  style={{
                    fontSize: "2rem",
                    color: "rgb(142, 53, 28)",
                  }}
                />
              </Link>
            </Center>
          </HStack>
          <HStack px="50px" spacing={0} mt={{ base: "-5px", md: "-30px" }}>
            <Center>
              <Image
                src="https://pics.narutostorm.com/NETFLIX.png"
                alt="netflix"
                w="30%"
              />
              <Spacer />
              <Link href="https://www.netflix.com/hk/title/70205012">
                <IoPlayForward
                  style={{
                    fontSize: "2rem",
                    color: "rgb(142, 53, 28)",
                  }}
                />
              </Link>
            </Center>
          </HStack>
          <HStack px="50px" spacing={0} mt={{ base: "-5px", md: "-25px" }}>
            <Center>
              <Image
                src="https://pics.narutostorm.com/tubi.png"
                alt="tubi"
                w="25%"
              />
              <Spacer />
              <Link href="https://tubitv.com/series/1622/naruto-subtitled">
                <IoPlayForward
                  style={{
                    fontSize: "2rem",
                    color: "rgb(142, 53, 28)",
                  }}
                />
              </Link>
            </Center>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoCard;