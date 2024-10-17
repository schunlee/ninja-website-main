'use client'

import {
    Box,
    Image,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    SimpleGrid,
} from '@chakra-ui/react'




export default function BlogList() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Game Blogs</Heading>
                    <SimpleGrid columns={2} spacing={10} marginTop={50}>
                        <Box
                            maxW={'450px'}
                            w={'full'}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}>
                            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                <Image src='./ads-6.png'
                                    alt="Example"
                                />
                            </Box>
                            <Stack>
                                <Text
                                    mt={250}
                                    color={'green.500'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}>
                                    Blog
                                </Text>
                                <Heading
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    Boost your conversion rate
                                </Heading>
                                <Text color={'gray.500'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </Text>
                            </Stack>
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Achim Rolle</Text>
                                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            maxW={'445px'}
                            w={'full'}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}>
                            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                <Image src='/ads-8.png'
                                    alt="Example"
                                />
                            </Box>
                            <Stack>
                                <Text
                                    mt={250}
                                    color={'green.500'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}>
                                    Blog
                                </Text>
                                <Heading
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    Boost your conversion rate
                                </Heading>
                                <Text color={'gray.500'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </Text>
                            </Stack>
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Achim Rolle</Text>
                                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            maxW={'450px'}
                            w={'full'}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}>
                            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                <Image src='/ads-1.png'
                                    alt="Example"
                                />
                            </Box>
                            <Stack>
                                <Text
                                    mt={250}
                                    color={'green.500'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}>
                                    Blog
                                </Text>
                                <Heading
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    Boost your conversion rate
                                </Heading>
                                <Text color={'gray.500'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </Text>
                            </Stack>
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Achim Rolle</Text>
                                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            maxW={'450px'}
                            w={'full'}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}>
                            <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                                <Image src='/ads-5.png'
                                    alt="Example"
                                />
                            </Box>
                            <Stack>
                                <Text
                                    mt={250}
                                    color={'green.500'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}>
                                    Blog
                                </Text>
                                <Heading
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue('gray.700', 'white')}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    Boost your conversion rate
                                </Heading>
                                <Text color={'gray.500'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </Text>
                            </Stack>
                            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Achim Rolle</Text>
                                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </SimpleGrid>


                </Stack>
            </Container>
        </Box>
    )
}