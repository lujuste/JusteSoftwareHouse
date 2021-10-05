import { HStack } from '@chakra-ui/react'
import TechItems from './TechItems'

interface ITechnologies {
    iconTech?: string;
    description?: string;
}

export default function GroupItemsCMS({iconTech, description}: ITechnologies) {
    return (
        <HStack flexWrap="wrap" spacing="10" mt="auto">
            <TechItems iconTech="reactIcon1" description="React Native  " />
            <TechItems iconTech="apple" description="iOS" />
            <TechItems iconTech="android" description="Android" />
            <TechItems iconTech="aws" description="Amazon" />
        </HStack>
    )
}