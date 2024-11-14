import {
  Container,
  Box,
  Stack,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Spacer,
} from "@chakra-ui/react";

import React from "react";
import DecoratedText from "../components/DecoratedText";

const faq_list = [
  {
    title: "What is Naruto Storm?",
    description:
      "Enter the Naruto universe in our pixel-style RPG! Join iconic characters, explore the Hidden Leaf Village, and complete epic missions. Customize your ninja, master unique skills, and face off against powerful enemies. With nostalgic pixel art and engaging gameplay, this is the perfect adventure for any Naruto fan!",
  },
  {
    title: "Where to enter the redemption code?",
    description:
      'Find the "Settings" button on the main interface, select "Redemption Code" after entering, enter the redemption code such as "naruto666", "kakashi666" or "sasuke666", and you can get the corresponding reward!',
  },
  {
    title: "Can I team up with friends to play games together?",
    description:
      "Yes! In multiplayer mode, you can invite friends to team up and challenge powerful bosses or complete difficult tasks together.",
  },
  {
    title: "What social functions are there in the game?",
    description:
      "There are friend systems, chat channels and gang systems in the game. You can add other players as friends, chat privately or in the guild, or interact by teaming up, sending gifts to each other, etc.",
  },
  {
    title: "Does the game have offline benefits?",
    description:
      "Yes! Even if you are offline, resources and experience will be automatically accumulated, and you can claim them after logging in again.",
  },
  {
    title: "How to participate in limited-time events?",
    description:
      "You can view the current limited-time events on the event interface and click the event icon to participate. Events usually have rich rewards, remember to check and participate regularly!",
  },
  {
    title: "What should I do if my stamina is used up?",
    description:
      "Stamina can be restored over time or replenished with stamina potions. There are also stamina supplies in the daily free stamina collection and event rewards.",
  },
  {
    title: "I am stuck at a certain level, what should I do?",
    description:
      "Try to upgrade the character's level and equipment attributes, or build a stronger lineup. If it is still difficult, you can try to team up with other players to challenge, or participate in gang activities to obtain resources to improve combat power.",
  },
  {
    title: "Can I customize the appearance of the ninja character?",
    description:
      "Yes! In the character interface, you can customize the character's appearance by unlocking and equipping different skins, costumes, or accessories. Some skins can be obtained through activities or the mall.",
  },
  {
    title: "What should I do if I encounter a bug in the game?",
    description:
      'If you encounter a bug, please report the problem on the "Customer Support" page in the settings, provide a detailed description and screenshots. Our team will fix it and provide compensation as soon as possible. Thank you for your understanding and support!',
  },
];

const FAQ = () => {
  return (
    <Box bg="gray.100" zIndex={0} position="relative">
      <Container maxW="80%">
        <Spacer pt="30px"></Spacer>
        <Box></Box>
      <DecoratedText>Frequently </DecoratedText><DecoratedText>Asked </DecoratedText><DecoratedText>Questions</DecoratedText>
        <Stack minH="1000">
          
          <Text color={"gray.500"} fontSize="18">
            Welcome to our FAQ section! Here, you'll find answers to the most
            common questions about Naruto Storm, including gameplay, updates,
            and technical support. Whether you're a new player just starting
            your ninja journey or a seasoned warrior, this resource is designed
            to provide clear and concise information to enhance your gaming
            experience.
          </Text>
          <Box zIndex={20} position="relative">
          <Accordion defaultIndex={[-1]} allowMultiple>
            {faq_list.map((item, index) => (
              <AccordionItem key={index} marginTop={5}>
                <h2>
                  <AccordionButton
                    bgColor="blue.400"
                    _hover={{ bgColor: "blue.500" }}
                    borderRadius="md"
                  >
                    <Box as="span" flex="1" textAlign="left" textColor="white">
                      {item["title"]}
                    </Box>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  borderBottom="1px"
                  borderLeft="1px"
                  borderRight="1px"
                  borderBottomLeftRadius="lg"
                  borderBottomRightRadius="lg"
                  borderColor="gray.300"
                >
                  {item["description"]}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FAQ;
