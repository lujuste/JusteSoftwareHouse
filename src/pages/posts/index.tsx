import type { GetStaticProps} from 'next'
import {Flex, Box, HStack, VStack, Image, Heading, Text, Button} from '@chakra-ui/react'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import { useState } from 'react'
import Link from 'next/link'
import {format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {TimeIcon} from '@chakra-ui/icons'

interface Post {
    uid: string;
    first_publication_date?: string;
    data: {
        title: string;
        subtitle: string;
        banner: {
            url: string;
        }
    }
}


interface PostPagination {
    next_page: string;
    results: Post[]
}

interface HomeProps {
    postsPagination: PostPagination
}


export default function Posts({postsPagination}: HomeProps): JSX.Element {

    const formattedPost = postsPagination.results.map(post => {
        return {
            ...post,
            first_publication_date: format(
                new Date(post.first_publication_date),
                'dd MMM yyyy',
                {locale: ptBR}
            )

        }
    })
    const [posts, setPosts] = useState<Post[]>(formattedPost)
    const [nextPage, setNextPage] = useState(postsPagination.next_page)
    const [currentPage, setCurrentPage] = useState(1)

    async function handleNextPage() {
      if (currentPage !== 1 && nextPage === null) {
          return;
      }  

      const postsResults = await fetch(`${nextPage}`).then(response => response.json())

      setNextPage(postsResults.next_page)
      setCurrentPage(postsResults.page)

      const newPost = postsResults.results.map(post => {
          return {
            key: post.uid,
            uid: post.uid,
            first_publication_date: format(
                new Date(post.first_publication_date), 'dd MMM yyyy', {
                    locale: ptBR
                }
            ), 
            data: {
                title: post.data.title,
                subtitle: post.data.subtitle,
                banner: {
                    url: post.data.banner.url
                }
            }
        }
      })

      setPosts([...posts, ...newPost])
    }

    return (
        <>
        {posts.map(post => (

            // eslint-disable-next-line @next/next/link-passhref
              // eslint-disable-next-line @next/next/link-passhref
            <> 
                <Flex
                  
                    key={post.uid}
                    direction="column"
                    maxW="1080px"
                    mx="auto"
                    mt="8rem"
                    px={["0", "3rem"]}
                    h="100%"
                    maxH="300px"
                    mb={["10rem", "13rem", "-5rem"]}

                >
                    <Link href={`/posts/${post.uid}`}>
                        <Box
                            key={post.uid}
                            boxShadow="dark-lg"
                            w="100%"
                            h="100%"
                            opacity="0.9"
                            bg="gray.900"
                            mx="auto"
                            borderRadius="15px"
                            px="2rem"
                            alignItems="left"
                            cursor="pointer"
                            border="1px"
                            borderColor="gray.300"
                            py={["2rem", "0"]}
                            pb="3rem"
                            transition="ease-out 200ms"
                            
                            _hover={{
                                borderColor: "green.300",
                            }}


                        >
                            <HStack
                                mx="auto"
                                justify={["center", "space-around"]}
                                flexDirection={["column", "row"]}
                                flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
                                my={["0rem", "3rem"]}
                            >
                                <VStack
                                    alignItems={["justify", "left"]}
                                    mr={["0", "0", "3rem"]}
                                >
                                    <Heading
                                        maxW={["500px", "auto"]}
                                        justifyContent="center"
                                        alignItems="justify"
                                        fontSize={["14px", "18px", "22px"]}
                                        fontWeight="bold"
                                        mb="1rem"
                                        textAlign={["center", "center", "left"]}
                                    >
                                        {post.data.title}
                                    </Heading>
                                    <Text
                                        pb={["1.5rem", "2rem", "0"]}
                                        w={["280px", "auto"]}
                                        maxW={["500px", "auto"]}
                                        fontSize={["10px", "14px", "16px"]}
                                        textAlign={["center", "center", "left"]}
                                        justifyContent="center"
                                    >
                                        {post.data.subtitle}
                                        <Flex
                                            justify={["center", "center", "left"]}
                                            mt="1rem"

                                        >
                                            <TimeIcon mt="3px" mr="0.5rem" />
                                            <Text> {post.first_publication_date} </Text>
                                        </Flex>
                                    </Text>
                                </VStack>

                                <Image

                                    display="block"
                                    borderRadius="15px"
                                    mx="0 auto"
                                    h="auto"
                                    maxH="200px"
                                    w="auto"
                                    alignItems="center"
                                    maxW={["80%", "300px"]}
                                    src={post.data.banner.url}
                                    alt="" />
                            </HStack>

                        </Box>
                    </Link>
                </Flex>
                
                </>
        
        
    ))}

                    { nextPage ? (
                        <Button type="button" onClick={handleNextPage}
                        boxShadow="2xl"
                        w="228px"
                        display="flex"
                        h="65px"
                        bgColor="purple.300"
                        mx="auto"
                        transition="ease-out 200ms"
                        _hover={{
                            opacity: "0.8"
                        }}
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        mt={["12rem", "15rem", "8rem", "10rem"]}
                        mb={["6rem", "3rem"]}
                        >
                            <Text fontSize="18px">Carregar mais ✅</Text>
                       </Button>  
                    ) : 
                    <Button type="button" 
                    w="228px"
                    display="flex"
                    h="65px"
                    bgColor="red.800"
                    mx="auto"
                    cursor="not-allowed"
                    _hover={{
                        opacity:"0.8"
                    }}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    mt={["12rem", "18rem", "8rem", "10rem"]}
                    mb={["6rem", "3rem"]}
                    >
                        <Text boxShadow="2xl" color="white" fontSize="18px">Sem mais posts <span>❌</span></Text>
                        
                   </Button>  
                    }
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const postsResponse = await prismic.query(
        [Prismic.Predicates.at('document.type', 'posts')],

        {
            pageSize: 2,
            orderings: '[document.first_publication_date desc]'   
        })

        const posts = postsResponse.results.map(post => {
            return {
                key: post.uid,
                uid: post.uid,
                first_publication_date: post.first_publication_date, 
                data: {
                    title: post.data.title,
                    subtitle: post.data.subtitle,
                    banner: {
                        url: post.data.banner.url
                    }
                }
            }
        })

        const postsPagination = {
            next_page: postsResponse.next_page,
            results: posts
        }
    
        return {
            props: {
                postsPagination,
                
            }
        }

}