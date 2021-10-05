import { HStack } from '@chakra-ui/react'
import TechItems from './TechItems'

interface ITechnologies {
    iconTech?: string;
    description?: string;
}

export default function GroupItemsMobile({iconTech, description}: ITechnologies) {
    return (
        <HStack flexWrap="wrap" spacing="10" mt="auto">
            <TechItems iconTech="docker" description="Docker" />
            <TechItems iconTech="mongodb" description="MongoDB" />
            <TechItems iconTech="redis" description="Redis" />
            <TechItems iconTech="mysql" description="MySQL" />
        </HStack>
    )
}