import {Flex, Heading, Text, Image } from '@chakra-ui/react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
    

    return (
        <Flex w="100%" maxW="300px" mx="auto" mb={["5", "10"]} h={["250px"]}>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             slidesPerView={1}
             watchSlidesProgress
             
             navigation
             pagination={{clickable: true}}
             autoplay= {{
                 delay: 4000,
             }}
            
             >
                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                    
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                    
                                   >
                                    <Image src="./images/reactIcon1.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     React
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["2xl", "2xl", "2xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                    
                                   >
                                    <Image w="90px"  src="./images/nodejs.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Node js
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"

                                   >
                                    <Image w="90px" src="./images/logoTypescript.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Typescript
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"

                                   >
                                    <Image src="./images/reactIcon1.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     React-Native
                                </Text>

                     </Flex>
                 </SwiperSlide>
                 
                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                    mt="1rem"
                                   >
                                    <Image boxSize="70px" src="./images/vuejs-seeklogo.com.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Vue js
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                mt="1rem"
                                   >
                                    <Image boxSize="90px" src="./images/dockerNew.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Docker
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"
                                   
                                   >
                                    <Image fill="white" boxSize="90px" src="./images/Amazon_Web_Services-Logo.wine.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Amazon AWS
                                </Text>

                     </Flex>
                 </SwiperSlide>

                 <SwiperSlide>
                     <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    mt="1rem"
                     >
  
                                 <Heading
                                   color="gray.100"
                                   fontWeight="bold"
                                   fontSize={["3xl", "4xl", "5xl"]}
                                   alignItems="center"
                                   justifyContent="center"

                                   >
                                    <Image boxSize="90px" src="./images/next-js.svg" alt="" />
                                 </Heading>

                                 <Text fontSize="20px" mt="1rem">
                                     Next js
                                </Text>

                     </Flex>
                 </SwiperSlide>


            </Swiper>
        </Flex>
    )
} 