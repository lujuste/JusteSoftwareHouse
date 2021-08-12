import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, HStack, LinkProps as ChakraLinkProps, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import { ActiveLink } from './ActiveLink';
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps extends ChakraLinkProps {
    children?: string | React.ReactNode
    to?: string
    activeProps?: ChakraLinkProps
    _hover?: ChakraLinkProps

}


export function Navigator({ to, activeProps, children, _hover, ...props }: NavLinkProps) {

    const router = useRouter()

    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="10"
            maxWidth={1200}
            alignSelf="center"
            position="relative"

        >

            <Breadcrumb separator="" spacing="70px">

                <BreadcrumbItem>
                    <ActiveLink activeClassName="active" href="/" passHref>
                        <BreadcrumbLink
                            _active={{
                                bgColor:
                                    "red"
                            }}
                            opacity="0.5">Home</BreadcrumbLink>
                    </ActiveLink>
                </BreadcrumbItem>


                <BreadcrumbItem >
                    <ActiveLink activeClassName="active" href="/posts" passHref>
                        <BreadcrumbLink opacity="0.5" _active={{ bgColor: "red" }} >Conteúdo</BreadcrumbLink>
                    </ActiveLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                    <ActiveLink activeClassName="active" href="/3" passHref>
                        <BreadcrumbLink opacity="0.6" >Mineração</BreadcrumbLink>
                    </ActiveLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <ActiveLink activeClassName="active" href="/4" passHref>
                        <BreadcrumbLink opacity="0.6" >Blockchain</BreadcrumbLink>
                    </ActiveLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                    <ActiveLink activeClassName="active" href="/5" passHref>
                        <BreadcrumbLink opacity="0.6" href="#">Contato</BreadcrumbLink>
                    </ActiveLink>
                </BreadcrumbItem>
            </Breadcrumb>

        </Flex>
    )
}