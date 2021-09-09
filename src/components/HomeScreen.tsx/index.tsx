import { Flex, Image, VStack, HStack, Box, Text, Stack, Button, useColorMode } from '@chakra-ui/react'
import AstronautImg from '../../../public/images/AstronautHome.svg'
import { ButtonHome } from './ButtonHome'
import { ArrowDownIcon } from "@chakra-ui/icons"
import Typical from 'react-typical'

import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

export function HomeScreen() {
    const {colorMode, toggleColorMode } = useColorMode()
    const primaryColor = colorMode === 'dark' ? "gray.800" : "gray.50"
    const secundaryColor = colorMode === 'dark' ? "gray.50" : "gray.800"
    const baseColorMode = colorMode === 'dark' ? "green.300" : "purple.300"

    return (
        <Flex
            h={["90%", "90%", "90vh"]}
            maxWidth={1480}
            flexDir={["column", "column", "column", "row"]}
            mx="auto"
            px="4"
            align="center"
            bg={primaryColor}
            justify="space-between"
            p={["20", "20", "0", "0", "0"]}
        >

            <Stack
                spacing={["0", "1"]}
                flex="1"
                mx="auto"
                maxWidth={1480}
                left={["-4rem", "0rem", "2rem", "3rem"]}
                position="relative"
                bottom={["0rem", "0rem", "-6rem", "1.5rem", "1.5rem"]}
            >

                <Text
                    mb={["0", "2rem"]}
                    fontSize={["16px", "18px", "22px", "24px", "30px"]}
                    align={["left", "left"]}
                    color={secundaryColor}

                >👋
                    Bem-vindo(a)
                    ao
                    futuro,
                </Text>
                <Text
                    fontSize={["30px", "38px", "46px", "50px", "56px"]}
                    pt={["8", "0", "0", "0", "0"]}
                    fontWeight="bold"
                    align="left"
                    color={secundaryColor}>Crio
                    coisas
                    na
                    internet <br></br> com  &nbsp; 
                    <Typical loop={Infinity} wrapper="b" steps={['Typescript', 8000, 'Javascript', 8000, 'React js', 8000, 'Next js', 8000, 'React-Native', 8000, 'Node js', 8000]} />
                </Text>


                <Text
                  fontSize={["14px",
                  "25px"]}
                  color={baseColorMode}
                  paddingRight="8rem"
                  pt="2rem"
                  mb="3rem">Design
                  +
                  Desenvolvimento
                  🔥
                  </Text>
                <Flex>
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
                        >Saiba
                            mais
                            <ArrowDownIcon marginLeft="3"
                            /></Button>
                    </HStack>
                </Flex>
            </Stack>

            <Image mb={[0, 0, 6, 0]} mt={[10, 10, 0]}  mr={[2, 16]} ml={["0", "10"]} h={["200", "250", "250", "480", "600"]} src={AstronautImg} alt="Logo astronauta da Juste Software House" />
        </Flex >
    )
}