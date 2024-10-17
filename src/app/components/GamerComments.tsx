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

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

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
          <Heading>Player Reviews</Heading>
          <Text marginTop={5}>We have received feedback from gamers around the world about Pixel Shippuden.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Nostalgic Game</TestimonialHeading>
              <TestimonialText>
                As a longtime fan of pixel art games,
                Pixel Shippuden brings back so many memories of my childhood gaming experiences.
                The visuals are stunning and remind me of the classic games I grew up with.
                The vibrant colors and detailed pixel art truly capture the essence of what made those games special.
                I find myself immersed in the world every time I play!
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
              <TestimonialHeading>Competitive Players</TestimonialHeading>
              <TestimonialText>
                I love the competitive aspect of Pixel Shippuden!
                The gameplay is fast-paced and requires strategy and skill, which keeps me coming back for more.
                The variety of characters and their unique abilities add depth to battles,
                making each match feel fresh and exciting.
                It’s great to see a mobile game that challenges me and rewards my efforts!
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
              <TestimonialHeading>Casual Game</TestimonialHeading>
              <TestimonialText>
                As someone who enjoys mobile games in short bursts,
                Pixel Shippuden is perfect for me!
                The controls are intuitive, and I can easily pick it up and play for a few minutes at a time.
                The storyline is engaging without being overwhelming,
                and the side quests offer just the right amount of challenge.
                It's a delightful experience that I can enjoy anywhere!
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