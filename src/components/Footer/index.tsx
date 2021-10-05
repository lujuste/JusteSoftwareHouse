import {Flex, Heading, SimpleGrid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import {ChevronUpIcon} from '@chakra-ui/icons'
import Reveal from 'react-reveal/Reveal'


export default function Footer() {

    function scrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
    

    return (
        <>
        <Flex
         w="100%"
         h="100%"
         px="2rem"
         bgColor="gray.900"
         mx="auto"
         alignContent="center"
         borderTop="1px"
         borderBottom="1px"
         borderColor="gray.300"
         
        >

            <Flex
            flex="1"
            flexDir={["column", "column", "row"]}
            maxW={1220}
            w="100%"
            h="195px"
            justify="space-between"
            mx="auto"
            alignItems="center"
            pb={["1rem", "0.5rem", "0"]}
            mb={["1rem", "1rem", "0"]}
            >   


                <Reveal>    
                    <Heading mt={["1rem", "1rem", '0']} fontSize={["32px", "36px", "42px"]} color="purple.300" fontWeight="regular" >boost  <br/> <Text display="inline-block" fontWeight="black" color="white">companies</Text><Text display="inline-block" color="green.300">.</Text> </Heading>

                </Reveal>           

                <Reveal>
                <SimpleGrid  templateColumns="1fr 1fr 1fr 1fr" gap="1rem">
                    <GridItem
                     borderRadius="15px"
                     opacity="0.4"
                     w="70px"
                     h="70px"
                     px="2"
                     py="1.5"
                     mx="auto"
                     bgColor="#7758E0"
                     cursor="pointer"
                     _hover={{
                         opacity:1
                     }}
                     >

                    
                        <Flex justifyItems="center" alignItems="center" mt="2" justify="center" mx="auto" py="auto">
                        <Image boxSize="10" alignItems="center"
                         justifyContent="center"  src="./images/github.svg"  alt="Logo do Github" />
                        </Flex>
                        

                     </GridItem>
                    
                     <GridItem
                     borderRadius="15px"
                     opacity="0.4"
                     w="70px"
                     px="2"
                     py="1.5"
                     h="70px"
                     mx="auto"
                     bgColor="#7758E0"
                     cursor="pointer"
                     _hover={{
                         opacity:1
                     }}
                     >

                    
                        <Flex justifyItems="center" alignItems="center" mt="2" justify="center" mx="auto" py="auto">
                        <Image boxSize="10" alignItems="center"
                         justifyContent="center"  src="./images/instagram.svg"  alt="Logo do Instagram" />
                        </Flex>
                        

                     </GridItem>

                     <GridItem
                     borderRadius="15px"
                     opacity="0.4"
                     w="70px"
                     px="2"
                     py="1.5"
                     h="70px"
                     mx="auto"
                     bgColor="#7758E0"
                     cursor="pointer"
                     _hover={{
                         opacity:1
                     }}
                     >

                    
                        <Flex justifyItems="center" alignItems="center" mt="2" justify="center" mx="auto" py="auto">
                        <Image boxSize="10" alignItems="center"
                         justifyContent="center"  src="./images/linkedin.svg"  alt="Logo do Linkedin" />
                        </Flex>
                        

                     </GridItem>


                     <GridItem
                     borderRadius="15px"
                     opacity="0.4"
                     w="70px"
                     px="2"
                     py="1.5"
                     h="70px"
                     mx="auto"
                     bgColor="#7758E0"
                     cursor="pointer"
                     _hover={{
                         opacity:1
                     }}
                     >

                    
                        <Flex justifyItems="center" alignItems="center" mt="2" justify="center" mx="auto" py="auto">
                        <Image boxSize="10" alignItems="center"
                         justifyContent="center"  src="./images/facebook.svg"  alt="Logo do Facebook" />
                        </Flex>
                        

                     </GridItem>

                </SimpleGrid>
                </Reveal>     
                


            </Flex>

            

        </Flex>

        <Flex 
        flex="1"
        w="100%"
        h="95px"
        bgColor="gray.900"
        alignItems="center" 
        
        >

            <Flex
                w="100%"
                maxW={1220}
                mx="auto"
                justify="left"
                alignItems="center"
                px="1rem"
            >
                <Reveal>
                <Text fontSize={["10px", "16px"]} maxW="500px" fontWeight="light" >
                Copyright © 2021 - Juste Tecnologia todos os direitos reservados        
                </Text>
                </Reveal>
                
                <Button onClick={scrollTop} boxSize="16" ml="auto">
                    <ChevronUpIcon boxSize="18" />
                </Button>

            </Flex>

            

        </Flex>

        </>
    )
}