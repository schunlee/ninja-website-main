import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { fonts } from '../fonts'

const Slogan = () => {
  return (
    <Stack spacing="0" ml="2" display={{ base: 'block', md: 'none' }}>
        <Text color={"white"} fontSize={"16"} fontFamily={fonts.hanyiFont.style.fontFamily}>NarutoStorm</Text>
        <Text color={"orange"} fontSize={"10"} fontFamily={fonts.siyuanFont.style.fontFamily}>Naruto Pixel-style RPG</Text>
    </Stack>
  )
}

export default Slogan