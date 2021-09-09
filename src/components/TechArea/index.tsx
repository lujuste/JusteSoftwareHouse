/* eslint-disable jsx-a11y/alt-text */
import { Heading, Flex, Box, VStack, Image, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'

export default function TechArea() {
    return (
        <>
        <Flex
          w="100%"
          h="100%"
          bg="gray.900"
          align="center"
          justify="center">
            <VStack
              maxW="1480px" 
              bg="gray.900"
              mx="auto"
              align="center"
              px={["6", "2"]}
              >
                <Heading
                  justify="center"
                  mx={["1rem", "0"]}
                  mb="2rem"
                  mt={["1.5rem", "0"]}
                  >‎Tecnologias
                  com
                  as
                  quais
                  trabalhamos‎</Heading>
                
                  <Flex maxW="1400px" bgColor="red" px="10" justify="center" align="center">
                    <Tabs>
                      <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                        <Tab>Three</Tab>
                        <Tab>Three</Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                          <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                          <p>three!</p>
                        </TabPanel>
                      </TabPanels>
                  </Tabs>
                </Flex>
            </VStack>   
        </Flex>
        </>
    )
}