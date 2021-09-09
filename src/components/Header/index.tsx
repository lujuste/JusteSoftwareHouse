import { ButtonSignIn } from './ButtonSignIn'
import { ButtonThemeMode } from './ButtonThemeMode'
import { Logo } from './Logo'
import { Navigator } from './Navigator'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, LinkProps as ChakraLinkProps, useBreakpointValue } from '@chakra-ui/react';
import { NavHamburguer } from './NavHamburguer';
import { useMenuDrawer } from '../../contexts/NavMenuContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {

    const { onOpen, isOpen, onClose } = useMenuDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: false,
        xl: true,
    })

    const isDrawerNavigator = useBreakpointValue({
        base: true,
        lg: false,
        xl: false,
    })

    if (!isWideVersion) {
        return (
            <>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent bg="gray.900">
                            <DrawerCloseButton mt="6" />
                            <DrawerHeader mt="7">Navegação</DrawerHeader>
                            <DrawerBody>
                                <NavHamburguer />
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
                <Flex
                    w="100%"
                    h="20"
                    bg="gray.900"
                    borderBottomWidth="1px"
                    borderColor="gray.300"
                >

                    <Flex
                        as="header"
                        w="100%"
                        maxWidth={1480}
                        h="20"
                        mx="auto"
                        mt="0"
                        px={["2", "4"]}
                        align="center"
                        borderBottomWidth="1px"
                        borderColor="gray.300"
                        bg="gray.900"
                    >


                        <Logo />

                        {isWideVersion && <Navigator />}

                        <ButtonSignIn />

                        {isWideVersion && <ButtonThemeMode />}

                        {!isWideVersion && (

                            <IconButton aria-label="Open navigation" icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" mr="2" ml="2" onClick={onOpen}>
                            </IconButton>
                        )}


                    </Flex>
                </Flex>
            </>
        )
    }

    return (
        <Flex
            w="100%"
            h="20"
            bg="gray.900"
            borderBottomWidth="1px"
            borderColor="gray.300"
        >

            <Flex
                as="header"
                w="100%"
                maxWidth={1480}
                h="20"
                mx="auto"
                mt="0"
                px={["2", "4"]}
                align="center"
                borderBottomWidth="1px"
                borderColor="gray.300"
                bg="gray.900"
            >


                <Logo />

                {isWideVersion && <Navigator />}

                <ButtonSignIn />

                {isWideVersion && <ButtonThemeMode />}

                {!isWideVersion && (

                    <IconButton aria-label="Open navigation" icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" mr="2" onClick={onOpen}>
                    </IconButton>
                )}


            </Flex>
        </Flex>
    )
}
