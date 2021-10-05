import {Flex, Image, Heading, Text} from '@chakra-ui/react'
import Reveal from 'react-reveal/Reveal'


export default function Warranty() {
    return (
        <>
       
       <Flex as="section"
        flexDir="column"
        w="100%"
        h="100%"
        flex="1"
        bgColor="gray.800"
        mx="auto"
       >
            
           <Flex
            w="100%"
            maxW="1280px"
            h="100%"
            mx="auto"
            px="5rem"
            pb="5rem"
            justify="space-around"
            flexWrap="wrap"
            alignItems="center"
            flex="1"
           >
             <Reveal>
                <Image boxSize={["320px", "320px", "370px", "370px", "500px"]} mt={["36.5rem", "20rem", "10rem", "16rem", "12rem"]} src="./images/warranty.svg" alt=""/>
             </Reveal>
            

            <Flex 
                mt={["2rem", "6rem", "4.5rem", "10rem", "10rem"]}
                flexDir="column"
                justify="center"
                alignItems={["center", "left"]}
                mx="auto"
            
                
            >

                <Reveal>
                <Heading textAlign="justify" fontSize={["40px", "60px"]}>Garantia <br/> <Text color="white" bgGradient="linear(to-r, green.300 85%, transparent)" px="1rem" pr="2rem" display="inline-block" >incondicional</Text> </Heading>
                <Text mt={[ "3rem"]} maxW={["347px", "400px"]} fontWeight="light" fontSize="24px" w="100%" textAlign="justify">
                        Se depois de iniciarmos juntos essa jornada, 
                        por qualquer motivo desistir do projeto eu assumo todo o risco por você.
                        Seu dinheiro de volta, sem fazer perguntas ou tentar te convencer do contrário, risco zero, simples assim!
                </Text>
                </Reveal>
                
            </Flex>

           </Flex>
           
           <Image w={["60%", "100%", "40%"]} justifyContent="center" align="center"
        alignSelf="center" zIndex="1" scaleX="-1" left="1" position="absolute" mt={["120%", "-10", "49", "59", "59"]} opacity="0.2"  bgRepeat="no-repeat" src="./images/elipseGreen2.svg" alt="" />
       </Flex>

       
       </>
    )
}