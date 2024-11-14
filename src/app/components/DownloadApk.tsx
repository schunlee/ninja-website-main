import { Box, Center, Stack } from "@chakra-ui/react";
import React from "react";
import { AndroidBadge } from "./AndroidBadge";
import DecoratedText from "./DecoratedText";

const DownloadApk = () => {
  return (
    <>
      <Box bg="gray.100" zIndex="-2" position="relative">
        <Center>
          <Stack mt="10">
            <DecoratedText>Download App</DecoratedText>
          </Stack>
        </Center>
      </Box>
      <Box bg="gray.100">
        <Center pt="30px">
          <AndroidBadge />
        </Center>
      </Box>
    </>
  );
};

export default DownloadApk;
