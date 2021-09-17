/* eslint-disable jsx-a11y/alt-text */
import {Box, Image, Flex, Text} from '@chakra-ui/react'

interface ITechnologies {
    iconTech?: string;
    description?: string;

}

export default function TechItems({iconTech, description}:  ITechnologies) {
    return (
        <Box display="flex" flexDir="column" w="175px" h="175px" bg="gray.900" _hover={{
            bgColor:"gray.800",
            cursor: "pointer"
        }} justifyContent="space-between" py="8" alignItems="center">
            <Image mb="3" w="98px" h="86px" src={`/images/${iconTech}.svg`}></Image>
             <Text color="gray.50">{description}</Text>                        
        </Box>
    )
}