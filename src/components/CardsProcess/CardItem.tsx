/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import {Box, Image, Heading, Text} from '@chakra-ui/react'

interface ICardItem { 
    icon: string;
    title: string;
    description: string;
    
}

export function CardItem({ icon, title, description, ...rest }: ICardItem) {
    return (
        <Box mb={[5, 0]} w="298px" h="422px" bgColor="gray.800" borderRadius="15px" border="1px" py="4" px="5" transition="ease 200ms" _hover={{
            borderColor: "green.300"
        }}>
            <Image align="left" mr="auto" src={`/images/${icon}.svg`} w="65px" h="65px"/>
            <Heading fontSize="30px" fontWeight="bold" mt="1.25rem" align="left"> {title} </Heading>
            <Text fontWeight="300" textAlign="start" fontSize="20px" mt="1.25rem">‎ {description} </Text>
        </Box>    
    )
}