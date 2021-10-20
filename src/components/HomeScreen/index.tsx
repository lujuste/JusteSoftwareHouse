import { Flex, Image, HStack, Text, Stack, Button, useColorMode, Heading, Box } from '@chakra-ui/react'
import AstronautImg from '../../../public/images/AstronautHome.svg'
import { ButtonHome } from './ButtonHome'
import { ArrowDownIcon } from "@chakra-ui/icons"
import SuperStrong from '../SuperStrong'
import Reveal from 'react-reveal/Reveal'

import { createBreakpoints } from "@chakra-ui/theme-tools"


const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

export function HomeScreen() {


    function scrollDown() {
        window.scroll(0, 750)
    }


    const {colorMode, toggleColorMode } = useColorMode()
    const primaryColor = colorMode === 'dark' ? "gray.800" : "gray.50"
    const secundaryColor = colorMode === 'dark' ? "gray.50" : "gray.800"
    const baseColorMode = colorMode === 'dark' ? "green.300" : "purple.300"

    return (
        <>  
        <Flex
            h={["100%", "100%%", "100vh"]}
            maxWidth={1480}
            flexDir={["column", "column", "column", "row"]}
            mx="auto"
            px="0"
            align="center"
            bg="transparent"
            justify="space-between"
            p={["20", "20", "0", "0", "0"]}
            
        >
        
            <Stack
                spacing={["0", "1"]}
                flex="1"
                mx="auto"
                maxWidth={1480}
                left={["-4rem", "0rem", "-4rem", "2rem", "3rem"]}
                position="relative"
                bottom={["0rem", "0rem", "-14rem", "1.5rem", "1.5rem"]}
                pt="4rem"
               
            >

                
                <Reveal>
                <Text
                    
                    mb={["0", "2rem"]}
                    fontSize={["16px", "18px", "22px", "24px", "24px"]}
                    align={["left", "left"]}
                    fontWeight={["normal", "light"]}
                    color={secundaryColor}

                >👋 Bem-vindo(a) ao futuro,
                </Text>
                </Reveal>
                <Text
                    fontSize={["30px", "36px", "42px", "40px", "46px"]}
                    pt={["8", "0", "0", "0", "0"]}
                    fontWeight="bold"
                    align="left"
                    color={secundaryColor}>
                    <SuperStrong>
                    </SuperStrong>
                    
                </Text>

                
                <Text
                  fontSize={["14px",
                  "25px", "28px"]}
                  color={baseColorMode}
                  paddingRight="8rem"
                  pt="2rem"
                  mb="3rem">Design + Desenvolvimento 🔥
                  </Text>
                <Flex mb="2rem">
                    <HStack spacing={["6", "4", "12", "12", "12",]} mt="16">
                        <ButtonHome />
                        <Button
                            fontSize="1.2rem"
                            fontWeight="normal"
                            fontFamily="Roboto"
                            ml="20"
                            mt="3"
                            
                            color={secundaryColor}
                            variant="ghost"
                            _hover={{ bg: "gray.900" }}
                            p="7"
                            onClick={scrollDown}
                        > Saiba mais <ArrowDownIcon marginLeft="3"/>
                        </Button>
                    </HStack>
                </Flex>
              
            </Stack>
            
            <Reveal>
            <Image  zIndex="1" mb={[0, 0, 6, 0]} mt={[12, 10, 20, 20]}  mr={[2, 16]} ml={["0", "10"]} h={["200", "250", "0", "480", "600"]} src={AstronautImg} alt="Logo astronauta da Juste Software House" />
            </Reveal>

            
            
           <Image w={["80vh", "90vh"]} h={["80vh", "90vh"]} position="absolute" top={["50", "10", "20"]} zIndex="-1" right="0px" bgRepeat="no-repeat" src="./images/greenElipse.svg" />
           
        
        </Flex >
        
        </>
    )
}