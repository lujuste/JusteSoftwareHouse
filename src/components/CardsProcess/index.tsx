import {CardItem} from './CardItem'
import {Heading, Flex, Text, Grid, GridItem} from '@chakra-ui/react'

export function CardsProcess() {
    return (
        <Flex borderTop="1px" borderColor="gray.100" align="center" alignItems="center" justify="center" w="100%" h="100%" pb={["0", "6rem"]} bg="gray.900">
            <Flex direction="column" maxW={1480} mx="auto" px="20px" alignItems="center" align="center" justify="center">
              <Heading
                  justify="left"
                  align="left"
                  fontSize={["28px", "30px", "34px", "40px"]}
                  mt={["70px", "100px"]}>Simplificando o processo de desenvolvimento
                  de softwares
                </Heading>
                <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} w="100%" justify="space-between"
                    align="center"
                    mt={["10","20"]}
                    mx="0 auto"
                    maxW="1480px"
                    flexWrap="wrap"
                    overflowX="hidden"
                    gap={[1, 6]}
                >

                    <GridItem cursor="pointer">
                        <CardItem icon="discover" title="Discover" description="‎Moldamos marcas através da exploração, aplicando pesquisas aprofundadas para desafiar suposições a cada momento." />
                    </GridItem>
                    
                    <GridItem cursor="pointer">
                        <CardItem icon="design" title="Design" description="‎Nossa abordagem de design é simplificar. Abraçamos a alegria em criar algo único que seja fácil para os usuários finais.‎" />
                    </GridItem>

                    <GridItem cursor="pointer">
                        <CardItem icon="development" title="Build" description="‎Usando tecnologias modernas, construímos com eficiência, criando soluções flexíveis e escaláveis orientadas para os negócios.‎" />
                    </GridItem>

                    <GridItem cursor="pointer">
                         <CardItem icon="rocket" title="Ignition" description="‎Moldamos marcas através da exploração, aplicando pesquisas aprofundadas para desafiar suposições a cada momento.‎" />
                    </GridItem>
                </Grid>    
            </Flex>  
        </Flex>
    )
}