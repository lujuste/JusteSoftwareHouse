import { Button, useColorMode } from '@chakra-ui/react'

export function ButtonHome() {

    const {colorMode, toggleColorMode} = useColorMode()
    const baseColorMode = colorMode === 'dark' ? 'green.300' : 'purple.300' 
    const secundaryColorMode = colorMode === 'dark' ? 'gray.900' : 'gray.50' 

    return (
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
    )
}