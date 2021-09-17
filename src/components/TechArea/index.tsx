/* eslint-disable jsx-a11y/alt-text */
import { Heading, Flex, VStack, useBreakpointValue, Slide } from '@chakra-ui/react'
import Slider from '../Slider'
import ContentItems from './ContentItems'


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

                 <Heading
                  justify="center"
                  mx={["1rem", "0"]}
                  mb={["-2rem", "2rem"]}
                  mt={["5.5rem", "0"]}
                >
                  Tecnologias a bordo deste foguete 
                </Heading> 

                 {
                    isWideVersion ? (<ContentItems />)
                    : (<Slider />
                )}
     
            </VStack>   
        </Flex>
        </>
    )
}