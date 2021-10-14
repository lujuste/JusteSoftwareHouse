import { Flex, Image, Heading, Text, Button} from '@chakra-ui/react'
import imageNotFound from '../../../public/images/pageNotFound.svg'
import Link from 'next/link'
export default function PageNotFound() {
    return (
        <Flex flexWrap={["wrap", "wrap", "nowrap"]}  py="7rem" flexDir="row" justify="space-between" align="center" as="section" minH="100%" maxW="1280px" mx="auto" >
            <Image ml={["6rem", "7rem", "4rem", "8rem", "8rem"]} mr={[ "0rem", "0rem", "0rem", "1rem"]}  boxShadow="revert" mt={[ "2rem", "5rem"]} maxW={["150px", "200px", "250px", "300px", "350px"]} w="100%" src={imageNotFound} alt="" />
            <Flex ml={["2rem", "4rem", "6rem", "6rem", "6rem"]} mx="auto" justify="center"  flex="1" flexDir="column" px={["1rem", "0"]} mr={["1rem", "6rem"]} maxW="500px" >  
                <Heading  textShadow="2xl" mt={["1rem", "1rem"]} fontSize={["80px", "90px", "110px", "120px" ]}fontWeight="bold" color="purple.300" >404...</Heading>
                <Heading fontSize={["24px", "28px", "32px", "34px", "36px", "38px"]} >Repito, 404. Câmbio!</Heading>
                <Text mt="2rem" color="green.300" fontWeight="bold" > ESTAÇÃO RESPONDE: </Text>
                <Text maxW="420px" mt="1rem"> Acho que você chegou no limite do universo.
                Mas fique ligado que muita coisa nova vindo
                por aí
                </Text>
                <Link href="/" passHref>
                <Button _hover={{
                        bgColor:"purple.300",
                        opacity: 0.8, 
                }} boxShadow="2xl" ml={["4rem", "0"]} type="button" maxW="200px" bgColor="purple.300" mb="-2.5rem" mt="3rem">Voltar à home</Button>
                </Link>    
            </Flex>
        </Flex>
    )
}