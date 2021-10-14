import { HStack } from '@chakra-ui/react'
import TechItems from './TechItems'

interface ITechnologies {
    iconTech?: string;
    description?: string;
}

export default function GroupItemsFrontEnd({iconTech, description}: ITechnologies) {
    return (
        <HStack flexWrap="wrap" spacing="10" mt="auto">
            <TechItems iconTech="node" description="Node js" />
            <TechItems iconTech="typescript" description="Typescript" />
            <TechItems iconTech="python" description="Python" />
            <TechItems iconTech="php" description="PHP" />
        </HStack>
    )
}