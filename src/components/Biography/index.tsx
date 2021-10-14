import {Flex, Heading, Image, Container, Text} from '@chakra-ui/react'
import lucasIcon from '../../../public/images/lucasJuste.svg'
import Reveal from 'react-reveal/Reveal'


export default function Biography() {
    return (
        <Flex
         as="section"
         w="100%"
         h="100vh"
         flexDir="column"
         >
             <Image w="100vh" h={["100vh", "100vh"]} zIndex="-1" right="1" position="absolute"  src="./images/greenElipse.svg" />

       
                <Flex 
                    flexDir="column"
                    maxWidth="1200px"
                    alignItems="center"
                    mx="auto"
                    mt="4rem"
                    h="100%"
                    flex="1"
                    
                >
                        <Reveal></Reveal>
                        <Image opacity="0.8" boxShadow="2xl" w="80vh" h={["100vh", "100vh"]} zIndex="-1" right="1" position="absolute"  src="./images/code.svg" />
                        
                        <Reveal>
                        <Heading mt="1.15rem" fontSize={["30px", "32px", "34px", "36px", "38px"]} fontWeight="900" fontFamily="Roboto" textAlign="center">  E quem vai acompanhar <Text color="white" pr="20px" bgGradient="linear(to-r, green.300 85%, transparent)" as="span" >  <br/>
                                    seu projeto?</Text>
                        </Heading>
                        </Reveal>
                          

                        <Flex 
                            flex="999"
                            maxWidth="1000px"
                            flexDir="column"
                            mx="auto"
                            alignItems="center"
                            justifyContent="space-between"
                            h="100%"
                            py="8rem"
                            mb="6rem"
                            bgColor="transparent"
                        >

                            <Reveal>
                            <Image  boxShadow="lg" boxSize="140px" mt="-4rem" objectFit="cover" src={lucasIcon} alt="" />
                            </Reveal>
                            
                                <Reveal>
                                <Container boxShadow="2xl" borderRadius="15px" mt="1rem"  maxW="920px" bgGradient="linear(to-l, gray.800 5%, transparent)" w="100%" textAlign="justify" fontSize="20px">
                                    <Text  px="2rem"  py="2rem" >
                                        Prazer, <strong>sou o Lucas!</strong>  <br/>

                                        Obviamente você ainda não me conhece, <strong>então deixe eu me apresentar: <br/></strong>

                                        Sou <strong>engenheiro formado e programador autodidata</strong> há mais de 5 anos, apaixonado
                                        por <strong>programação, marketing e empreendedorismo.<br/></strong> 

                                        Atualmente, atuo como <strong>desenvolvedor full-stack e mobile</strong> remotamente e
                                        sou fundador de um app que será lançado em breve! <strong>(Sem spoilers!)</strong>  <br/>

                                        Além disso, estou sempre procurando <strong>ajudar toda a comunidade</strong> com o meu conhecimento técnico,
                                        com vídeos e <strong>vários artigos publicados.</strong> <br/>

                                        Bom, agora que estamos <strong>devidamente apresentados, </strong>quero aproveitar para pedir
                                        para você <strong>visitar minhas redes sociais no rodapé desta aplicação. 💜</strong>  <br/>

                                    </Text>
                                </Container>
                                </Reveal>
                                
                        </Flex>
                </Flex>

        </Flex>


    )
}