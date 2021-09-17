import {Flex, Heading, Text, Grid, GridItem} from '@chakra-ui/react'
import CounterItem from './CounterItem'

export default function CounterArea() {
    return (
        <Flex 
         w="100%"
         maxW="1480px"
         flexDirection="column"
         mx="auto"
         h="60vh"
         alignItems="center"
         mt={[ "3.5rem", "5rem", "7rem"]}
        >
            <Heading as="span" lineHeight={["2.8rem", "3.2rem"]} textAlign="center" >
                Impulsionando e tirando <Text display="inline" color="green.300">projetos do papel</Text>, <br/>
                ajudando a <Text display="inline" color="green.300">desenhar, construir e lançar <br/> </Text> 
                produtos digitais
            </Heading>

            <Flex maxW="1480px" justify="space-between" align="center">
                <Grid templateColumns={["1fr", "1fr", "1fr, 1fr", "repeat(3, 1fr)"]} w="100%" justify="space-between" maxW={1480} flexWrap="wrap" mx="auto" pb="10" >
                    <GridItem mr="10">
                        <CounterItem facts={10} iconSome="soma" description="Usuários impactados"/>
                    </GridItem>
                    <GridItem mr="10">
                        <CounterItem facts={2} iconSome="soma" description="Horas de desenvolvimento"/>
                    </GridItem>
                    <GridItem mr="10">
                        <CounterItem facts={0.927} iconSome="soma" description="Avaliação de clientes"/>
                    </GridItem>
                </Grid>
            </Flex>

        </Flex>
    )
    
}