'use client'

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    useColorModeValue,
    AspectRatio,
} from '@chakra-ui/react'

export default function CallToActionWithVideo() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')} display="flex" justifyContent="center" minW='100%'>
            <Container maxW={'7xl'} display="flex">
                <Stack
                    
                    
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>

                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: `""`,
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>
                                Download once,
                            </Text>
                            <br />
                            <Text as={'span'} color={'blue.400'}>
                                have fun everyday!
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Pixel Shippuden is a game inspired by the popular Naruto series,
                            presented in a retro pixel art style.
                            This game captures the essence of Naruto's iconic characters, battles,
                            and settings through nostalgic pixelated visuals,
                            allowing players to relive the intense action and ninja world with simplified, intuitive controls.
                        </Text>
                        <Text textIndent="2em" marginTop={-4} color={'gray.500'}>
                            In Pixel Shippuden, players can control key characters from the Naruto universe,
                            such as Naruto, Sasuke, Sakura, and others, utilizing their signature jutsus and combat strategies.
                            The pixel art design blends seamlessly with the ninja theme,
                            giving the game a classic yet engaging aesthetic.

                        </Text>
                        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                fontWeight={'normal'}
                                px={6}
                                colorScheme={'blue'}
                                bg={'blue.400'}
                                _hover={{ bg: 'blue.500' }}>
                                Get started
                            </Button>
                        </Stack>
                    </Stack>

                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Box
                            position={'relative'}
                            height='full'
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}>
                            <AspectRatio ratio={1}>
                                <iframe
                                    title='naruto'
                                    src='/video-7.mp4'
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </Box>
                    </Flex>

                </Stack>
            </Container>
        </Box>
    )
}