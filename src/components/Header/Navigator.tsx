import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, LinkProps as ChakraLinkProps, useBreakpointValue } from '@chakra-ui/react';
import React from 'react'
import { NavigationItem } from './NavigationItems';



interface NavLinkProps extends ChakraLinkProps {
    children?: string | React.ReactNode
    to?: string
    activeProps?: ChakraLinkProps
    _hover?: ChakraLinkProps

}


export function Navigator({ to, activeProps, children, _hover, ...props }: NavLinkProps) {


    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px={["10", "20"]}
            mx="auto"
            maxWidth={1200}
            justify="center"

        >
            <NavigationItem />

        </Flex>
    )
}