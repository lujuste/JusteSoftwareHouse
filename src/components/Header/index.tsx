import { Flex, HStack } from '@chakra-ui/react'
import { ButtonSignIn } from './ButtonSignIn'
import { ButtonThemeMode } from './ButtonThemeMode'
import { Logo } from './Logo'
import { Navigator } from './Navigator'


export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="10"
            px="6"
            align="center"
            justify="center"
            borderBottomWidth="1px"
            borderColor="gray.300"

        >
            <Logo />
            <Navigator />
            <ButtonSignIn />
            <ButtonThemeMode />
        </Flex>
    )
}