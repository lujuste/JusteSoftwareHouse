
import { Button, HStack, Icon, useBreakpoint, useBreakpointValue, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { MoonItem } from './MoonItem'


export function Example() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </header>
    )
}

export function ButtonThemeMode() {

    const isVersion = useBreakpointValue({
        base: false,
        lg: false,
        xl: true,
    })

    return (
        <MoonItem />
    )

}

