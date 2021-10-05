import { Flex, Heading, Text, Image, Box, Button, useBreakpointValue } from '@chakra-ui/react';
import Reveal from 'react-reveal/Reveal'


import {InputBase} from '../Form/input'

export default function WorkUsForm() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: false,
        xl: true,
    })

    return (
        <Flex
        as="section"
        w="100%"
        h="100%"
        mx="auto"
        justify="center"   
        align="center" 
        alignItems="center"
        >

            <Flex
                justify="space-around"
                mx="10rem"
                flex="1"
                py="5rem"
                h="100%"
                
            >
                <Flex as="form"
                justify="center"
                flexDir="column" 
                pb="8rem"
                >

                <Reveal>

                <Heading
                    fontSize="62px"
                >    Vamos trabalhar <br/>
                        <Text
                            bgGradient="linear(to-r, green.300, transparent)"
                            px="1.5rem"
                            fontWeight="bold"
                            as="span"
                        > 
                        
                        juntos?
                        
                        </Text>
                
                </Heading>
                </Reveal>

                <Reveal>
                <Text fontSize="26px" fontWeight="light" mt="1.5rem">Fale conosco e receba as próximas <br/> informações</Text>
                </Reveal>
                
                <Reveal>
                <Box
                
                mt="2rem"
                h="70px"
                maxW="500px"
                w="100%"
                justifyContent="center"
                mx="auto"
                px="1rem"
                bgGradient="linear(to-r, gray.300, transparent)"
                borderRadius="15px"
                borderColor="gray.100"
                color="white"
                
               >
                   <InputBase
                    name="name"
                    label="Insira seu nome completo"
                    type="name"
                   />
               </Box>

               <Box
                mt="2rem"
                h="70px"
                maxW="500px"
                w="100%"
                justifyContent="center"
                mx="auto"
                px="1rem"
                bgGradient="linear(to-r, gray.300, transparent)"
                borderRadius="15px"
                borderColor="gray.100"
                color="white"
                
               >

                    <InputBase
                    name="email"
                    label="Insira seu e-mail"
                    type="email"
                    
                   />

                   <Button type="submit"
                    bgColor="green.300"
                    maxW="206px"
                    color="gray.800"
                    w="100%"
                    h="65px"
                    justifyContent="center"
                    borderRadius="15px"
                    mt="3rem"
                    fontFamily="Roboto"
                    fontWeight="bold"
                    fontSize="2xl"
                    boxShadow="2xl"
                    hover
                    
                   
                   >
                       enviar!

                   </Button>

                   <Text fontSize="14px" fontWeight="light" mt="2rem">Não se preocupe, suas informações ficarão seguras.</Text>

               </Box>
                </Reveal>
               

                </Flex>


                <Reveal>
                {isWideVersion && (
                    <Image mt="4rem" boxShadow="revert" boxSize={["sm", "sm", "sm", "80", "sm"]} src="/images/security.svg" alt="" />
                )}
                </Reveal>
                

                

            </Flex>

            

        </Flex>
     )
}