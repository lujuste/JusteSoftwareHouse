/* eslint-disable @next/next/no-title-in-document-head */
import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import {Image, Heading, Flex, Text, HStack, Center, Icon, Spinner, Divider } from '@chakra-ui/react'
import {TimeIcon, ViewIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'
import { useRouter } from "next/router";
import {format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
// eslint-disable-next-line @next/next/no-document-import-in-page
import  Head  from 'next/head';
import Link from 'next/link'
import Comments from "../../components/Comments";


interface Post {
    first_publication_date: string | null;
    last_publication_date: string | null;
    data: {
      title: string;
      subtitle: string;
      banner: {
        url: string;
      };
      author: string;
      content: {
        heading: string;
        body: {
          text?: string;
        }[];
      }[];
    };
}

interface PostProps {
    post: Post;
    navigation: {
        prevPost: {
            uid: string;
            data: {
                title: string;
            }
        }[]
        nextPost: {
            uid: string;
            data: {
                title: string;
            }
        }[]
    }
}

export default function Post({post, navigation}: PostProps): JSX.Element {

const humanWordsPerMinute = 200;
const titleWords = post?.data.title.split(' ').length;

const totalWords = post?.data.content.reduce((acc, content) => {
const headingWords = content.heading
      ? content.heading.split(' ').length
      : 0;
    const bodyWords = RichText.asText(content.body).split(' ').length;
    // eslint-disable-next-line no-param-reassign
    acc += headingWords + bodyWords;
    return acc;
  }, 0);

    const timeToRead = Math.ceil((titleWords + totalWords) / humanWordsPerMinute);

    const router = useRouter()
    

    if(router.isFallback) {
        return (
            <>
            <Flex
                maxW="100%"
                minH="90vh"
                w="100%"
                mx="auto"
                bgColor="gray.800"
                justify="center"
                flexDir="column"
                align="center"
            >
                <Flex justify="center" align="center"> 
                    <Spinner thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.900"
                            color="purple.300"
                            size="xl"
                     />
                    </Flex>
                </Flex>
                
            </>
        )
    }

    const formattedPost = format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        {
            locale: ptBR,
        }
    )

    return (
       <>
        <Head>
            <title> {`${post.data.title} - Juste Tecnologia`} </title>
            <meta property="og:description" content={post.data.subtitle} />
            <meta property="og:image" content={post.data.banner.url} />
        </Head>

        <Flex mx="auto"
         w="100%"
         maxW="1480px"
         pb="-2rem"
         my={["-1rem", "1rem"]}
         flexDir="column"
         justify="center"
         >
            <Image
                mt="2rem"
                w="100%"
                mx="auto"
                h="25rem"
                objectFit="cover"
                src={post.data.banner.url}
                alt="">
            </Image>
       <Flex flexDir="column" px="2rem">
        <Flex 
            mx="auto" w="100%" maxW="650px"  justifyContent="left" alignItems="left" mt="4rem"    
        >
            <Heading mt={["0", "3rem" ]}mb="1rem" fontSize="42px" textAlign="left" >
                {`${post.data.title}`}
            </Heading>
        </Flex>
        

        <HStack mx="auto" w="100%" maxW="650px" justifyContent="left" alignItems="left" mt="1rem" >
            <Flex flexDir="row" justifyContent="center" alignItems="center" >
                <TimeIcon />
                <Text fontWeight="light" ml="0.5rem">{`Publicado: ${formattedPost}`}</Text>
                <Center px="1rem" height="20px">
                    <Divider  orientation="vertical" />
                </Center>
                <Icon as={ViewIcon} /> 
                <Text fontWeight="light" ml="0.5rem"> {`Tempo de leitura: ${timeToRead}min`} </Text>
            </Flex>
        </HStack>

                {post.data.content.map(content => {

                    return (
                        <>
                           
                                <Flex key={content.heading} mx="auto"
                                 w="100%"
                                 maxW="650px" 
                                 textAlign="justify"
                                 justifyContent="center"
                                 alignItems="left"
                                 mt={["3rem"]}
                                 flexDir="column"
                                 
                                 >

                                <Heading textAlign="left" fontSize="24px">
                                    {content.heading}
                                </Heading>
                                
                                <Flex mt="2rem" color="gray.200" flexDirection="column"
                                dangerouslySetInnerHTML={{
                                    __html: RichText.asHtml(content.body)
                                    }}
                                />

                                </Flex>

                                
                        </>
                    )
                })}
        </Flex>


                    <Divider mt="3rem" maxW="980px" mx="auto" w="100%" orientation="horizontal" />
                    <Flex  mt="3rem"  justify="center" align="center" maxW="800px" mx="auto" w="100%">
                                    
                                <Flex ml="1rem" flexWrap="wrap" justify={["center", "center", "space-between"]} w="100%">
  
                                    {navigation?.prevPost.length > 0 && (
                                        navigation?.nextPost.length === 0 ? (
                                            <Flex flexDir="column">
                                        <Link href={`/posts/${navigation.prevPost[0].uid}`}>
                                            <Heading opacity="0.7" _hover={{
                                                opacity: 1,
                                            }} cursor="pointer" textAlign={["left"]}  textOverflow="ellipsis" maxW="320px" fontSize="20px" > {(navigation.prevPost[0].data.title)} </Heading>
                                        </Link>

                                        <Link href={`/posts/${navigation.prevPost[0].uid}`} passHref >
                                         <Text cursor="pointer" opacity="0.8" _hover={{
                                             opacity: 1,
                                         }} mt="1rem" color="green.300" textAlign={["center", "center", "left"]} fontWeight="bold" ><Icon mr="1rem" as={ArrowLeftIcon} />Post anterior</Text>
                                        </Link>

                                        </Flex>  
                                        ) : (
                                            <Flex flexDir="column">
                                        <Link href={`/posts/${navigation.prevPost[0].uid}`}>
                                            <Heading opacity="0.7" _hover={{
                                                opacity: 1,
                                            }} cursor="pointer" textAlign={["left"]}  textOverflow="ellipsis" maxW="320px" fontSize="20px" > {(navigation.prevPost[0].data.title)} </Heading>
                                        </Link>

                                        <Link href={`/posts/${navigation.prevPost[0].uid}`} passHref >
                                         <Text cursor="pointer" opacity="0.8" _hover={{
                                             opacity: 1,
                                         }} mt="1rem" color="green.300" textAlign={["center", "center", "left"]} fontWeight="bold" ><Icon mr="1rem" as={ArrowLeftIcon} />Post anterior </Text>
                                        </Link>

                                        </Flex>  
                                        )
                                          

                                    )}



                                    { navigation?.nextPost.length > 0 &&  (
                                        navigation?.prevPost.length === 0 ? (

                                        <Flex flexDir="column"  ml={["-1rem", "auto"]} >
                                        <Link href={`/posts/${(navigation.nextPost[0].uid)}`}>
                                            <Heading _hover={{
                                                opacity: 1,
                                            }}  cursor="pointer" mr="auto" mt={["2rem", "3rem", "0rem", "0", "0"]} opacity="0.7" textAlign={["center", "center", "center", "right"]}  maxW="320px" textOverflow="ellipsis" fontSize="20px" > {(navigation.nextPost[0].data.title)} </Heading>
                                        </Link>

                                        <Link href={`/posts/${(navigation.nextPost[0].uid)}`} passHref >
                                        <Text cursor="pointer" opacity="0.8" _hover={{
                                            opacity: 1,
                                        }} mt="1rem" color="green.300" fontWeight="bold" textAlign={["center", "center", "right"]} >Próximo post <Icon ml="1rem" as={ArrowRightIcon} /></Text>
                                        </Link>

                                    </Flex>   
                                        ) : (
                                            <Flex mr="1rem" flexDir="column" justify="space-around" >
                                            <Link href={`/posts/${(navigation.nextPost[0].uid)}`}>
                                                <Heading _hover={{
                                                    opacity: 1,
                                                }} cursor="pointer" mr="auto" mt={["2rem", "3rem", "0rem", "0", "0"]} opacity="0.7" textAlign={["center", "center", "center", "right"]}  maxW="320px" textOverflow="ellipsis" fontSize="20px" > {(navigation.nextPost[0].data.title)} </Heading>
                                            </Link>
                                            <Text mt="1rem" color="green.300" fontWeight="bold" textAlign={["center", "center", "right"]} >Próximo post <Icon ml="1rem" as={ArrowRightIcon} /></Text>
    
                                            </Flex>   
                                        )
                                    ) }

                                    </Flex>

                                </Flex>

                                <Divider mt="3rem" mb={["0", "3rem"]} maxW="980px" mx="auto" w="100%" orientation="horizontal" />

                                <Comments />
        
            </Flex>
        </>
    )}

    export const getStaticPaths: GetStaticPaths = async () => {
        const prismic = getPrismicClient();
        const posts = await prismic.query([
          Prismic.Predicates.at('document.type', 'posts' )
        ]);
      
        const paths = posts.results.map(post => {
          return {
            params: { 
              slug: post.uid,
            }
          }
        })
      
     
        return { 
        paths: [],
          fallback: true
        }
      
      };

    export const getStaticProps = async ({params, preview = false, previewData }) => {
        const prismic = getPrismicClient();
        const {slug} = params;
        
        const response = await prismic.getByUID('posts', String(slug), {
            ref: previewData?.ref ?? null,

        });

        const prevPost = await prismic.query(
            [Prismic.Predicates.at('document.type', 'posts')], {
                pageSize: 1,
                after: response.id,
                orderings: '[document.first_publication_date]' 
            }
        )

        const nextPost = await prismic.query(
            [Prismic.Predicates.at('document.type', 'posts')], {
                pageSize: 1,
                after: response.id,
                orderings: '[document.last_publication_date desc]' 
            }
        )

        console.log(nextPost)
        console.log(prevPost)

        const post = {
            uid: response.uid,
            first_publication_date: response.first_publication_date,
            data: {
                title: response.data.title,
                subtitle: response.data.subtitle,
                banner: {
                    url: response.data.banner.url,
                },
                content: response.data.content.map(content => {
                  
                    return {
                        heading: content.heading,
                        body: [...content.body]
                    }
                })
            } 
        }

        return {
            props: {
                post,
                navigation: {
                    prevPost: prevPost?.results,
                    nextPost: nextPost?.results
                }
            },
            revalidate: 60 // 1 min
            
        }
    }

     



