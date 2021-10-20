import { Button, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link';


export function ButtonHome() {

    const {colorMode, toggleColorMode} = useColorMode()
    const baseColorMode = colorMode === 'dark' ? 'green.300' : 'purple.300' 
    const secundaryColorMode = colorMode === 'dark' ? 'gray.900' : 'gray.50' 

    return (
        <NextLink href="/contact" >
        <Button
            size="lg"
            bg={baseColorMode}
            color={secundaryColorMode}
            type="button"
            _hover={{
                bgColor: '#00D665'
            }}
        >Embarcar
        </Button>
        
        </NextLink>
    )
}