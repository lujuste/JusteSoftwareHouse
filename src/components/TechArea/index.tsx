/* eslint-disable jsx-a11y/alt-text */
import { Heading, Flex, VStack, useBreakpointValue, Slide, Text } from '@chakra-ui/react'
import Slider from '../Slider'
import ContentItems from './ContentItems'
import Reveal from 'react-reveal/Reveal'
import React from 'react'



export default function TechArea() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
})

    return (
        <>
        <Flex
          w="100%"
          h="100%"
          bg="gray.900"
          align="center"
          justify="center"
          
          >
            <VStack
              maxW="1480px" 
              bg="gray.900"
              mx="auto"
              align="center"
              px={["6", "2"]}
              mb={["3.5rem", "7rem"]}
              justify="center"
              >

                <Reveal>
                  <Heading
                    justify="center"
                    mx={["1rem", "0"]}
                    px="2rem"
                    mb={["0rem", "2rem"]}
                    mt={["3.5rem", "0"]}
                    alignContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    Algumas <Text as="span" bgGradient="linear(to-r, green.300, transparent)" px="1rem" pr="3rem" >tecnologias para nossa missão</Text>  
                  </Heading> 
                </Reveal>

                 {
                    isWideVersion ? (
                    
                    <Reveal>
                      <ContentItems />
                    </Reveal>
                    
                    ) : (
                    
                    <Reveal>
                      <Slider />
                    </Reveal>
                )}
     
            </VStack>   
        </Flex>
        </>
    )
}