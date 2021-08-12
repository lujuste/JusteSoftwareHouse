import { MoonIcon } from '@chakra-ui/icons'
import { HStack, Icon } from '@chakra-ui/react'

export function ButtonThemeMode() {
    return (
        <HStack ml="45">
            <Icon w={6} h={6} as={MoonIcon} />
        </HStack>
    )
}