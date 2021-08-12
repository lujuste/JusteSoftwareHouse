import { Image } from "@chakra-ui/react"
import logoIcon from "../../../public/images/Logo.svg"

export function Logo() {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image w="120" h="110" borderColor="#000" src={logoIcon} />

    )
}