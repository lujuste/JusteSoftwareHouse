import { Button, Flex, useBreakpointValue } from "@chakra-ui/react"
import { FaUserAlt } from 'react-icons/fa'
import { useSession, signOut } from "next-auth/client"
import { FiX } from 'react-icons/fi';
import Link from 'next/link'

export function ButtonSignIn() {
    const [session] = useSession()
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
      xl: true,
  })

    return session ? (
         <Flex align="center" ml="auto">
               {isWideVersion && ( <Button
                  borderRadius="50px"
                  color="gray.50"
                  opacity="0.8"
                  size={"lg"}
                  fontSize={["15.5"]}
                  bgColor="gray.300"
                  onClick={() => signOut()}
                  >
                      <FaUserAlt color="#04d361"/> &nbsp;&nbsp;&nbsp; 
                      {`${session.user.name}`} &nbsp;
                      <FiX color="gray.900" />        
                </Button>)}
            
        </Flex>) : (
             <Flex
               align="center"
               ml="auto">
                <Link
                  href="/login"
                  passHref>
                   <Button
                      size={"lg"}
                      bgColor="purple.300"
                      transition="ease-in 200ms"
                      _hover={{
                          bgColor: '#6940E0'
                      }}
                      >
                          Entrar
                      </Button>
                 </Link>
         </Flex>
        )

}