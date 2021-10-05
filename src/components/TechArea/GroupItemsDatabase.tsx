import { HStack } from '@chakra-ui/react'
import TechItems from './TechItems'

interface ITechnologies {
    iconTech?: string;
    description?: string;
}

export default function GroupItemsDatabase({iconTech, description}: ITechnologies) {
    return (
        <HStack flexWrap="wrap" spacing="10" mt="auto">
            <TechItems iconTech="wordpress" description="Wordpress" />
            <TechItems iconTech="magento" description="Magento" />
            <TechItems iconTech="laravel" description="Laravel" />
            <TechItems iconTech="shopify" description="Shopify" />
        </HStack>
    )
}