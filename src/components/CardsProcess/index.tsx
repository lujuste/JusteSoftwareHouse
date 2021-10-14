import {CardItem} from './CardItem'
import {Heading, Flex, Grid, GridItem, Text} from '@chakra-ui/react'
import Reveal from 'react-reveal/Reveal'
import { motion } from "framer-motion";

export function CardsProcess() {
    return (

        <Flex borderTop="1px" borderColor="gray.100" align="center" alignItems="center" justify="center" w="100%" h="100%" pb={["0", "6rem"]} bg="gray.900">
            <Flex direction="column" maxW={1480} mx="auto" px="20px" alignItems="center" align="center" justify="center">
                <Reveal>
                <Heading
                  justify="center"
                  align="center"
                  fontSize={["28px", "30px", "34px", "40px"]}
                  mt={["70px", "100px"]}>Simplificando o processo <Text as="span" px="1rem" pr='4rem' bgGradient="linear(to-r, green.300, transparent)" >de desenvolvimento
                  de softwares</Text> 
                </Heading>
                </Reveal>
                <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} w="100%" justify="space-between"
                    align="center"
                    mt={["10","20"]}
                    mx="0 auto"
                    maxW="1480px"
                    flexWrap="wrap"
                    overflowX="hidden"
                    gap={[1, 6]}
                >
                    <Reveal>

                    <motion.div
                       className="container"
                       whileHover={{ scale: 0.98 }}
                       
                    >

                    <GridItem cursor="pointer">
                        <CardItem icon="discover" title="Discover" description="‎Moldando marcas através da exploração, aplicando pesquisas aprofundadas para desafiar suposições a cada momento." />
                    </GridItem>

                    </motion.div>

                    
                    <motion.div
                        className="container"
                        whileHover={{ scale: 0.98 }}
                    >
                        <GridItem cursor="pointer">
                            <CardItem icon="design" title="Design" description="Criando algo único sem temas prontos e que seja fácil para os usuários finais. A inteção do design é simplificar e humanizar.‎" />
                        </GridItem>    
                    </motion.div>
                    
                    <motion.div
                     whileHover={{ scale: 0.98 }}   
                    >   
                        <GridItem cursor="pointer">
                            <CardItem icon="development" title="Build" description="‎Usando tecnologias modernas, construo com eficiência, crio soluções flexíveis e escaláveis orientadas para seus negócios.‎" />
                        </GridItem>      
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                    > 
                        <GridItem cursor="pointer">
                            <CardItem icon="rocket" title="Deliver" description="Fazendo uma geral no projeto em busca de melhorias importantes. Em fim a etapa de entrega para servir uma ótima experiência para os usuários finais."/>
                        </GridItem>
                    </motion.div>
                    

                    </Reveal>
                </Grid>    
            </Flex>  
        </Flex>
        
    )
}