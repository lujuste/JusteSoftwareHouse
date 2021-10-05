/* eslint-disable @next/next/no-title-in-document-head */
import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import {Image, Heading, Flex, Text, HStack, Box, Icon, } from '@chakra-ui/react'
import {TimeIcon} from '@chakra-ui/icons'
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'
import { useRouter } from "next/router";
import {format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
// eslint-disable-next-line @next/next/no-document-import-in-page
import  Head  from 'next/head';

interface Post {
    first_publication_date?: string;
    data: {
        title: string;
        banner: {
            url: string;
        };
        content: {
            heading: string;
            body: {
                text: string;
            }[]
        }[]
    }
}

interface PostProps {
    post: Post;
}

export default function Post({post}: PostProps): JSX.Element {
        
    // const totalWords = post.data.content.reduce((total, contentItem) => {
    //     total += contentItem.heading.split(' ').length
    //     const words = contentItem.body.map(item => item.text.split(' ').length)
    //     words.map(word => (total += word))
    //     return total
    //   }, 0)
      
    //   console.log(totalWords)
      
    // const timeRead = Math.ceil(totalWords / 200)

    const router = useRouter()

    if(router.isFallback) {
        return <h1>Carregando...</h1>
    }

    const formattedPost = format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        {
            locale: ptBR
        }
    )

    console.log(post)

    return (
       <>
        <Head>
            <title> {`${post.data.title} - Justecnologia`} </title>
        </Head>

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
            mx="auto" w="100%" maxW="650px" justifyContent="center" alignItems="center" mt="4rem"    
        >
            <Heading >
                {post.data.title}
            </Heading>
        </Flex>
        

        <HStack mx="auto" w="100%" maxW="650px" justifyContent="left" alignItems="left" mt="1rem" >
            <Flex flexDir="row" justifyContent="center" alignItems="center" >
                <TimeIcon />
                <Text ml="0.5rem">{formattedPost}</Text>
            </Flex>
        </HStack>

                {post.data.content.map(content => {
                    return (
                        <Flex mx="auto" w="100%" maxW="650px" justifyContent="center" alignItems="center" mt="3rem" key={content.heading} flexDir="column">
                        <Heading fontSize="24px">
                            {content.heading}
                        </Heading>
                        <Flex mt="2rem" mb="2rem" color="gray.200" flexDirection="column"
                         dangerouslySetInnerHTML={{
                             __html: RichText.asHtml(content.body)
                             }}
                         />
                    
                </Flex>
                    )
                })}
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
          paths,
          fallback: 'blocking'
        }
      
      };

    export const getStaticProps: GetStaticProps = async (context) => {
        const prismic = getPrismicClient();
        const {slug} = context.params;
        const response = await prismic.getByUID('posts', String(slug), {});

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
            },
            redirect: 60 * 30
        }
    }

     



