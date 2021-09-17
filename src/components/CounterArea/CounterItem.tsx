import {Box, Flex, Image, Text} from "@chakra-ui/react"
import CountUp from "react-countup"

export interface CounterItemProps {
    facts: number;
    iconSome: string;
    description: string;
}

export default function CounterItem({facts, iconSome, description}: CounterItemProps){
    return (
        <Box
         mb={[0, 0]} display="flex" flexDir="column" w="279px" h={["130px", "190px", "250px"]} bgColor="gray.800" py="4" px={["15", "5"]} mt={["4rem", "6.5rem"]}
        >
            <Flex alignItems="center" textAlign="center" justify="center" fontSize="42px" fontWeight="bold" >
                <Image mr="4"  w="25px" h="25px" src={`./images/${iconSome}.svg`} alt="" />
                <CountUp end={facts} duration={4} decimals={3} />           
            </Flex>

            <Box mt={["0", "5"]} bgGradient="linear(to-r, #7928CA, transparent)" w="279" h="10px"></Box> 
            <Text mt={["0", "2rem"]} fontWeight="bold" justifyContent='center' fontSize="20px" > {description} </Text> 
         
        </Box>
    )
}