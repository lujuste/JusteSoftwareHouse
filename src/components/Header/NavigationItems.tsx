import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ActiveLink } from './ActiveLink';
import React from 'react'

export function NavigationItem() {
    return (
        <Breadcrumb separator="" justify="center" align="center" display="block" spacing={["45px"]}>

            <BreadcrumbItem _hover={{ textDecoration: "none" }}>
                <ActiveLink href="/" passHref>
                    <BreadcrumbLink mt="25px" pb="28px" _hover={{ textDecoration: "none", opacity: 1 }}
                        opacity="0.5">Home</BreadcrumbLink>
                </ActiveLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
                <ActiveLink href="/posts" passHref>
                    <BreadcrumbLink mt="25px" pb="28px" opacity="0.5" _hover={{ textDecoration: "none", opacity: 1 }} >Conteúdos</BreadcrumbLink>
                </ActiveLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
                <ActiveLink href="/miner" passHref>
                    <BreadcrumbLink opacity="0.5" mt="25px" pb="28px" _hover={{ textDecoration: "none", opacity: 1 }} >Blockchain</BreadcrumbLink>
                </ActiveLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <ActiveLink href="/blockchain" passHref>
                    <BreadcrumbLink opacity="0.5" mt="25px" pb="28px" _hover={{ textDecoration: "none", opacity: 1 }} >Cases</BreadcrumbLink>
                </ActiveLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
                <ActiveLink href="/contact" passHref>
                    <BreadcrumbLink opacity="0.5" mt="25px" pb="28px" _hover={{ textDecoration: "none", opacity: 1 }} href="#">Contato</BreadcrumbLink>
                </ActiveLink>
            </BreadcrumbItem>
        </Breadcrumb>

    )
}