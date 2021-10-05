import {Flex, Heading, Text, SimpleGrid, Image, Grid, GridItem} from '@chakra-ui/react'
import jsIcon from '../../../public/images/js.svg'
import typescriptIcon from '../../../public/images/typescript.svg'
import reactIcon from '../../../public/images/reactIcon1.svg'
import awsIcon from '../../../public/images/aws.svg'
import nodeIcon from '../../../public/images/node.svg'
import rocketIcon from '../../../public/images/rocketSpecification.svg'
import discordIcon from '../../../public/images/discordSpecification.svg'
import updateIcon from '../../../public/images/updateSpecification.svg'
import Reveal from 'react-reveal/Reveal'



export default function Specification() {
    return (
        <>

            <Flex
            h="100%"
            maxWidth="100%"
            w="100%"
            flexDir={["column",]}
            mx="auto"
            align="center"
            bgGradient="linear(to-r, gray.900, transparent)"
            justify="space-between"
            p={["20", "20", "0", "0", "0"]}
            

            >
                <Flex zIndex="-1" position="absolute" right="1" bottom="1" w="100vh" h="100%" bgGradient="linear(to-l, purple.300 -320%, transparent 90%)" />
                <Flex 
                    zIndex="1"
                    justify="center"
                    alignItems="center"
                    mt={[ "1rem", "5rem"]}
                    flexDir="column"
                    
                    >
                        <Reveal>
                        <Heading textAlign="center" mb="1.5rem">
                        Deixe por nossa conta todo o <Text>processo de <Text color="white" px="0.5rem" pr={["0", "2rem"]} bgGradient="linear(to-r, green.300 75%, transparent)" display="inline-block">criação e desenvolvimento</Text> </Text>

                        </Heading>
                        </Reveal>
                        

                        <Flex flexDir="column" w="100%" maxW="1000px">

                            <Reveal>
                                <SimpleGrid alignContent="center" justifyItems="center" w="100%" mx="auto" minChildWidth="10px" justifyContent="center" alignItems="center" spacing={[ "60px", "40px"]} py="3rem"   >
                                    <Image src={jsIcon} alt="" boxSize="60px" opacity="0.1" />  
                                    <Image src={typescriptIcon} alt="" boxSize="60px" opacity="0.1" />  
                                    <Image src={reactIcon} boxSize="60px" alt="" opacity="0.1" />  
                                    <Image src={awsIcon} boxSize="60px" alt="" opacity="0.1" />  
                                    <Image src={nodeIcon} boxSize="60px" alt="" opacity="0.1" />  
                                </SimpleGrid>
                            </Reveal>

                        

                        <Flex 
                         maxW="1000px"
                         mx="auto"
                         px="1rem"
                        >

                            <Reveal>
                                <Grid mt="2rem" templateColumns={[ "1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]} ml={["0", "2rem", "4rem", "2rem", "2rem"]} gap={[ "30px", "40px", "80px", "100px", "190px"]}>
                            
                            <GridItem  maxW="400px" maxH="350px"  h="100%" w="100%">
                                <Image ml={["1.5rem", "2rem", "2rem", "2rem", "0rem"]} src={updateIcon} boxSize="170px" alt=""  />
                                <Text fontSize="18px" fontWeight="bold" textAlign="center" w="100%" maxW="340px" h="100%">Manutenção e atualizações gratuitas por todo o período do deploy da aplicação</Text>
                            </GridItem>
                                
                            <GridItem alignItems="center" justifyContent="center"  maxW="400px" maxH="350px"  h="100%" w="100%">
                                <Image src={discordIcon} ml={["1.5rem", "2rem"]} boxSize="150px" alt="" />
                                <Text fontSize="18px" fontWeight="bold" textAlign="center"   w="100%" maxW="340px" h="100%">Manutenção e atualizações gratuitas por todo o período do deploy da aplicação</Text>
                            </GridItem>

                            <GridItem  maxW="400px" maxH="350px"  h="100%" w="100%">
                                <Image ml={["1rem", "2rem"]} alt="" src={rocketIcon} boxSize="135px" />
                                <Text  textAlign="center" fontSize="18px" fontWeight="bold" w="100%" maxW="340px" mt="0.7rem" h="100%" >Manutenção e atualizações gratuitas por todo o período do deploy da aplicação</Text>
                            </GridItem>
                        </Grid>
                            </Reveal>

                        

                        </Flex>

                        </Flex>

                    </Flex>
                <Flex
                    h="100%"
                    maxWidth="1180px"
                    bg="transparent"
                    w="100%"
                    justify="center"
                    mx="auto"
                    mb={[ "4rem", "8rem"]}
                >

                </Flex>

            </Flex>
        </>
    )
    
}