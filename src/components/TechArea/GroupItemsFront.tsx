import { HStack } from '@chakra-ui/react'
import TechItems from './TechItems'

interface ITechnologies {
    iconTech?: string;
    description?: string;
}

export default function GroupItemsFrontEnd({iconTech, description}: ITechnologies) {
    return (
        <HStack flexWrap="wrap" spacing="10" mt="auto">
            <TechItems iconTech="js" description="Javascript" />
            <TechItems iconTech="typescript" description="Typescript" />
            <TechItems iconTech="reactIcon1" description="React" />
            <TechItems iconTech="vuejs" description="Vue" />
        </HStack>
    )
}