/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Heading, VStack, useBreakpointValue, Input, Text, Button } from '@chakra-ui/react'
import styles from './login.module.scss'
import { getSession, signIn, useSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

export default function Login() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
        xl: true,
    })

    const [session] = useSession()

    console.log(session)
 
    return (
        <Flex
          bgColor="gray.900"
          w="100%"
          h="100vh"
          justify="center">

            <Flex
              maxW="1260px"
              bgColor="gray.900"
              mx="auto"
              px="2"
              justify="center"
              flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>

                <Flex
                  direction="column"
                  pl="1rem"
                  bgColor="gray.900"
                  mr={isWideVersion && ("7rem")}>

                        { isWideVersion && (
                        <Image
                          src="./images/logo.svg"
                          w="200px"
                          h="300"
                          position="relative"
                          mr="15rem" />
                          )
                        }

                        <Heading
                          mb={["1rem", "4rem"]}
                          mt="2rem"
                          fontSize={["32px", "50px", "56px"]}
                          >Faça seu login
                          <br/>
                          para ver
                          <span className={styles.test}>
                          conteúdos <br/>exclusivos🚀</span>
                        </Heading>     
                </Flex>

                <Flex
                  bgColor="#222222"
                  borderRadius="10"
                  px="3rem"
                  maxW={["319px", "389px", "489px"]}
                  h="601px"
                  align="center"
                  justify="center"
                  mb="5rem"
                  mx="auto"
                  mt={isWideVersion && ("9.5rem")}>

                    <VStack spacing="1.7rem">
                        <Input
                          _focus={{bg:'black'}}
                          backgroundColor="gray.900"
                          maxW={["289px","339px", "439px", "449px"]}
                          h="67px"
                          name="email"
                          placeholder="E-mail"
                          type="email" />

                        <Input
                          _focus={{bg:'black'}}
                          backgroundColor="gray.900"
                          maxW={["289px", "339px", "439px", "449px"]}
                          h="67px"
                          name="password"
                          placeholder="Senha"
                          type="password"
                         />

                        <Text
                          position="relative"
                          top="0.6rem"
                          right={["4rem", "5.5rem", "9rem"]}
                          >esqueci minha senha
                        </Text>

                        <Button
                          type="submit"
                          bgColor="purple.300"
                          top="0.5rem"
                          display="flex"
                          w={["289px", "339px", "439px", "449px"]}
                          h="67px"
                          >Entrar
                        </Button>

                        <Text
                          position="relative"
                          top="0.6rem"
                          >Ou
                        </Text>


                        <Button
                          bgColor="white"
                          opacity="0.5"
                          color="gray.900"
                          top="0.6rem"
                          display="flex"
                          w={["289px",
                          "339px",
                          "439px",
                          "449px"]}
                          h="67px"
                          _hover={{opacity:
                          1}}
                          onClick={() => signIn('google')}>
                          Continuar com Google
                        </Button>


                        <Button
                          bgColor="#3b5998"
                          opacity="1"
                          _hover={{bgColor:"#3b5998"}}
                          color="gray.50"
                          display="flex"
                          w={["289px", "339px", "439px", "449px"]}
                          h="67px"
                          onClick={() => signIn('facebook')}
                          >Continuar com Facebook  
                        </Button>
                    </VStack>
                </Flex>
                
            </Flex>
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })

  if (session) {
      return {
          redirect: {
              destination: '/',
              permanent: false,
          }
      }
  }

  return {
    props: {

    }
  }
}