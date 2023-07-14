import {
  chakra,
  Box,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Heading,
} from "@chakra-ui/react";

import { QUESTIONS } from "@/sections/faq/fixtures";

export const FAQ = () => {
  return (
    <chakra.section id="faq" py={{ base: "12", md: "24" }}>
      <Container maxW="container.lg">
        <Stack spacing="8">
          <Heading size="3xl">Frequently Asked Questions</Heading>
          <Accordion allowMultiple>
            <Stack>
              {QUESTIONS.map((question, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {question.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb="4">{question.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Stack>
          </Accordion>
        </Stack>
      </Container>
    </chakra.section>
  );
};
