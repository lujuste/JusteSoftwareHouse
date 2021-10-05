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
              mb="7rem"
              >

                <Reveal>
                  <Heading
                    justify="center"
                    mx={["1rem", "0"]}
                    mb={["-2rem", "2rem"]}
                    mt={["5.5rem", "0"]}
                    
                  >
                    Algumas <Text bgGradient="linear(to-r, green.300, transparent)" px="1rem" pr="3rem" display="inline-block">tecnologias a bordo deste foguete</Text>  
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