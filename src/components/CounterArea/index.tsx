import {Flex, Heading, Text, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import CounterItem from './CounterItem'
import Reveal from 'react-reveal/Reveal'

export default function CounterArea() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
        xl: true
    })


    return (
        <Reveal>
        <Flex 
         w="100%"
         maxW="1480px"
         flexDirection="column"
         mx="auto"
         h={["100%", "100%", "100%", "100%"]}
         alignItems="center"
         mt={[ "3.5rem", "5rem", "5rem"]}
         mb="8.5rem"
        >
               
                {
                    isWideVersion ? (
                        <Heading mt="1rem" lineHeight={["2.8rem", "3.2rem"]} px="1.5rem" textAlign="center" >
                            <Text as="span" bgGradient="linear(to-r, green.300, transparent)" pr="2rem" px="1rem"  color="white"> Fornecendo tecnologias  </Text>e tirando <br/>projetos do papel, 
                            <Text bgGradient="linear(to-r, green.300, transparent)" pr="2rem" px="1rem"  color="white" as="span">desenvolvendo produtos digitais</Text> 
                        </Heading>
                    ) : (
                        <Heading mt="2.7rem" fontSize={["26px", "36px"]} lineHeight={["2.8rem", "3.2rem"]} px="1.5rem" textAlign="center" >
                            <Text mt="4rem" as="span" bgGradient="linear(to-r, green.300, transparent)" pr="2rem" px="1rem"  color="white"> Fornecendo tecnologias </Text>e tirando projetos do papel, 
                            <Text bgGradient="linear(to-r, green.300, transparent)" pr="2rem" px="1rem"  color="white" as="span">desenvolvendo produtos digitais</Text> 
                        </Heading>
                    )
                }
                
         

            <Flex maxW="1480px" justify="space-between" align="center" mx="auto">
                <Reveal>
                <Grid  templateColumns={["1fr", "1fr", "1fr, 1fr", "repeat(3, 1fr)"]} w="100%" H="100%"   justify="space-between" maxW={1480} flexWrap="wrap" mx="auto"  >
                    
                    <GridItem mr={[ "0", "4"]}  >
                        <CounterItem facts={10} iconSome="soma" description="Usuários impactados"/>
                    </GridItem>
             
                    <GridItem mr={[ "0", "4"]}>
                        <CounterItem facts={2} iconSome="soma" description="Horas desenvolvidas"/>
                    </GridItem>
                    <GridItem mr={[ "0", "4"]}>
                        <CounterItem facts={9} iconSome="soma" description="Avaliações de clientes"/>
                    </GridItem>
                </Grid>
                </Reveal>
            </Flex>
            

        </Flex>
        </Reveal>
    )
    
}