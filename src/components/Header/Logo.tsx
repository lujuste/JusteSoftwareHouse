import { Image } from "@chakra-ui/react"
import logoIcon from "../../../public/images/logomark.svg"
import Link from 'next/link'

export function Logo() {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Link href="/">
        <Image cursor="pointer" w="50" h="50" borderColor="#000" src={logoIcon} ml="4" />
        </Link>

    )
}