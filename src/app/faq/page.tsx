import { Container, Box, Stack, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'

import React from 'react'




const faq_list = [
    {
        "title": "What is Pixel Shippuden?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "title": "Does Pixel Shippuden have multiplayer?",
        "description": "Yes, the game features both local and online multiplayer modes. You can team up with friends for co-op missions or compete in PvP battles in various arenas."
    },
    {
        "title": "Can I customize my ninja?",
        "description": "Yes! Players can customize their ninja's appearance, outfit, and gear. As you progress through the game, you’ll earn new weapons, armor, and accessories to further personalize your character."
    },
    {
        "title": "What should I do if I encounter a bug or issue in the game?",
        "description": "If you encounter any bugs or issues, you can report them through the official support channels or forums. The development team regularly addresses bugs and releases patches to improve the game experience."
    },
    {
        "title": "Are there regular updates or seasonal events?",
        "description": "Yes! The developers frequently release updates that add new content, such as characters, missions, and cosmetics. There are also seasonal events where players can earn exclusive rewards."
    },
    {
        "title": "What is Pixel Shippuden?",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "title": "Does Pixel Shippuden have multiplayer?",
        "description": "Yes, the game features both local and online multiplayer modes. You can team up with friends for co-op missions or compete in PvP battles in various arenas."
    },
    {
        "title": "Can I customize my ninja?",
        "description": "Yes! Players can customize their ninja's appearance, outfit, and gear. As you progress through the game, you’ll earn new weapons, armor, and accessories to further personalize your character."
    },
    {
        "title": "What should I do if I encounter a bug or issue in the game?",
        "description": "If you encounter any bugs or issues, you can report them through the official support channels or forums. The development team regularly addresses bugs and releases patches to improve the game experience."
    },
    {
        "title": "Are there regular updates or seasonal events?",
        "description": "Yes! The developers frequently release updates that add new content, such as characters, missions, and cosmetics. There are also seasonal events where players can earn exclusive rewards."
    },
]


const FAQ = () => {
    return (
        <Box bg='gray.100' >
            <Container maxW='80%'>
                <Stack minH="1000">
                    <Heading as='h1' mt='5' textAlign='left'>Frequently Asked Questions</Heading>
                    <Text>Welcome to our FAQ section! Here, you'll find answers to the most common questions about Pixel Shippuden, including gameplay, updates, and technical support. Whether you're a new player just starting your ninja journey or a seasoned warrior, this resource is designed to provide clear and concise information to enhance your gaming experience.</Text>
                    <Accordion defaultIndex={[-1]} allowMultiple>
                        {faq_list.map((item, index) => (
                            <AccordionItem key={index} marginTop={5}>
                                <h2>
                                    <AccordionButton bgColor='blue.400' _hover={{ bgColor: "blue.500" }} borderRadius="md">
                                        <Box as='span' flex='1' textAlign='left' textColor='white'>
                                            {item['title']}
                                        </Box>
                                        <AccordionIcon color='white' />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {item['description']}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}






                    </Accordion>
                </Stack>
            </Container>

        </Box>
    )
}

export default FAQ