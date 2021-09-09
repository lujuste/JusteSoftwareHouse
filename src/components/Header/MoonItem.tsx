import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react"
import React, { useState } from "react"


export function MoonItem() {
    const {colorMode, toggleColorMode} = useColorMode()
    const primaryColor = colorMode === 'dark' ? "orange.200" : "white"  

    return (
        <HStack ml="21">
            <Button bg="gray.900" onClick={toggleColorMode}  >
                {colorMode === 'dark' ? <Icon w={6} h={6} as={MoonIcon} color={primaryColor} /> : <Icon w={6} h={6} as={SunIcon} color={primaryColor} />  }
            </Button>
        </HStack>
    )

}