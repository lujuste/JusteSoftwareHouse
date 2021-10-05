import {Flex, Heading, Text, Grid, GridItem} from '@chakra-ui/react'
import CounterItem from './CounterItem'
import Reveal from 'react-reveal/Reveal'

export default function CounterArea() {
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
         mb="6rem"
        >
               
                <Heading as="span" lineHeight={["2.8rem", "3.2rem"]} px="1.5rem" textAlign="center" >
                  <Text bgGradient="linear(to-r, green.300, transparent)" pr="2rem" px="1rem" display="inline" color="white"> Fornecendo tecnologias e tirando </Text>  <br/>projetos do papel, 
                    ajudando a desenhar,<br/>  construir e lançar
   
                    produtos digitais
                </Heading>
                
         

            <Flex maxW="1480px" justify="space-between" align="center" mx="auto">
                <Reveal>
                <Grid  templateColumns={["1fr", "1fr", "1fr, 1fr", "repeat(3, 1fr)"]} w="100%" H="100%"   justify="space-between" maxW={1480} flexWrap="wrap" mx="auto"  >
                    
                    <GridItem mr={[ "0", "10"]}  >
                        <CounterItem facts={10} iconSome="soma" description="Usuários impactados"/>
                    </GridItem>
             
                    <GridItem mr={[ "0", "10"]}>
                        <CounterItem facts={2} iconSome="soma" description="Horas desenvolvidas"/>
                    </GridItem>
                    <GridItem mr={[ "0", "10"]}>
                        <CounterItem facts={9} iconSome="soma" description="Avaliação de clientes"/>
                    </GridItem>
                </Grid>
                </Reveal>
            </Flex>
            

        </Flex>
        </Reveal>
    )
    
}