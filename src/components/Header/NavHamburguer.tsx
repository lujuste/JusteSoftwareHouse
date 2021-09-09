import { VStack, Text } from "@chakra-ui/react";
import { ActiveLink } from "./ActiveLink";
import { ButtonSignIn } from "./ButtonSignIn";

export function NavHamburguer() {
    return (
        <VStack spacing="7">
            <ActiveLink href="/" passHref>
                <Text cursor="pointer">Home</Text>
            </ActiveLink>
            <ActiveLink href="/posts" passHref>
                <Text cursor="pointer">Conteúdos</Text>
            </ActiveLink>
            <ActiveLink href="/miner" passHref>
                <Text cursor="pointer">Mineração</Text>
            </ActiveLink>
            <ActiveLink href="/blockchain" passHref>
                <Text cursor="pointer">Blockchain</Text>
            </ActiveLink>
            <ActiveLink href="/contact" passHref>
                <Text cursor="pointer">Contato</Text>
            </ActiveLink>
            <ButtonSignIn />
        </VStack>
    )
}