'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

// const TestimonialHeading = (props: Props) => {
//   const { children } = props

//   return (
//     <Heading as={'h3'} fontSize={'xl'}>
//       {children}
//     </Heading>
//   )
// }

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function GamerComments() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Pixel Shippuden</Heading>
          <Text marginTop={5} w="60%">Enter the Naruto universe in our pixel-style RPG! 
            Join iconic characters, explore the Hidden Leaf Village, and complete epic missions. 
            Customize your ninja, master unique skills, and face off against powerful enemies. 
            With nostalgic pixel art and engaging gameplay, this is the perfect adventure for any Naruto fan!</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Nostalgic Game</TestimonialHeading> */}
              <TestimonialText>
              Man, this pixel-art Naruto RPG is awesome! It captures the vibe of the classic anime perfectly while making it fun. I love the character customization - making your own ninja is so cool! And the soundtrack? Totally retro!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/matsumoto.jpg'
              }
              name={'Yukihiro Matsumoto'}
              title={'Gamer from kyoto'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Competitive Players</TestimonialHeading> */}
              <TestimonialText>
              This pixel-style Naruto RPG is awesome! The retro graphics are really cool and the gameplay is more strategic than I expected. It's perfect for anyone who loves Naruto and wants something fresh but nostalgic. Definitely worth a try!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/bill.jpg'
              }
              name={'Bill Lee'}
              title={'Gamer from Chengtu'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Casual Game</TestimonialHeading> */}
              <TestimonialText>
              I've been watching Naruto, but when it comes out in a game like this, l feel like i'm back in my childhood.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/jane.jpg'
              }
              name={'Jane Deng'}
              title={'Gamer from Chungking'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}