import { Flex, Heading, Text, Image, Box, Button, useBreakpointValue, useToast, Spinner} from '@chakra-ui/react';
import Reveal from 'react-reveal/Reveal'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { FieldError } from 'react-hook-form'
import { Input } from '../Form/input'
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import { motion } from "framer-motion"




export default function WorkUsForm() {

    function toastSucess() {
        toast.success("Sucesso! Obrigado pelo contato.", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    function tostFailure() {
        toast.error("Puxa! Alguma coisa deu errado. Este e-mail já foi cadastrado.", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const [loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório').email('Email inválido')
        
      })

      

      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(formSchema)
      });

      
      const [data, setData] = useState([])
      const [formData, setFormData] = useState({})

      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(data)
      }


      const onSubmit = async (data) => {

         try {
            setLoading(true)
            await fetch('/api/getUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
              .then(toastSucess)
              .catch(error => tostFailure())
              setLoading(false)
             
         } catch(error) {
             setLoading(false)
             tostFailure()

            console.log(error)
         }
      }
                   
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: false,
        xl: true,
    })

    return (
        <Flex
        as="section"
        w="100%"
        h="100%"
        mx="auto"
        justify="center"   
        align="center" 
        alignItems="center"
        >

            <Flex
                justify="space-around"
                mx={["2rem", "4rem", "6rem", "10rem"]}
                flex="1"
                py="5rem"
                h="100%"
                
            >
                <Flex as="form"
                justify="center"
                flexDir="column" 
                pb="12rem"
                onSubmit={handleSubmit(onSubmit)}
                method='post'
                >

                <Reveal>

                <Heading
                    fontSize="55px"
                >    Vamos trabalhar <br/>
                        <Text
                            bgGradient="linear(to-r, green.300, transparent)"
                            px="1.5rem"
                            fontWeight="bold"
                            as="span"
                        > 
                        
                        juntos?
                        
                        </Text>
                
                </Heading>
                </Reveal>

                <Reveal>
                <Text mb={["0", "0", "1rem"]} fontSize={[ "18px", "24px", "26px"]} fontWeight="light" mt="1.5rem">Fale comigo e receba mais <br/> informações</Text>
                </Reveal>
                
                <Reveal>
                <Box
               
                mt="2rem"
                h="70px"
                maxW="500px"
                w="100%"
                justifyContent="center"
                mx="auto"
                px="1rem"
                bgGradient="linear(to-r, gray.300, transparent)"
                borderRadius="15px"
                borderColor="gray.100"
                color="white"

                
               >

                
                   <Input
                    id="name"
                    name="name"
                    type="name"
                    label="Insira seu nome"
                    {...register('name')}
                    error={errors.name}
                    
                    
                   />
                         
                  

               </Box>

               <Box
                mt="2rem"
                h="70px"
                maxW="500px"
                w="100%"
                justifyContent="center"
                mx="auto"
                px="1rem"
                bgGradient="linear(to-r, gray.300, transparent)"
                borderRadius="15px"
                borderColor="gray.100"
                color="white"
                
               >
                    
                    <Input
                        name="email"
                        type="email"
                        {...register('email')}
                        id="email"
                        label="Insira seu email"
                        error={errors.email}
                   />
              

                   { !!errors ? (
                       <>
                   <motion.div 
                         whileHover={{ scale: 1.07 }}
                         
                         >
                   <Button type="submit"
                    bgColor="green.300"
                    maxW="206px"
                    color="gray.800"
                    w="100%"
                    h="65px"
                    ml="auto"
                    justifyContent="center"
                    borderRadius="15px"
                    mt="2rem"
                    fontFamily="Roboto"
                    fontWeight="bold"
                    fontSize="2xl"
                    boxShadow="2xl"
                    transition="ease-in 200ms"
                    _hover={{
                        opacity: 0.8
                    }}
                   >
                       
                      {  !loading ? 'enviar!' : ( <Spinner/>)  }

                   </Button> </motion.div> </>) : (

                       <p> {errors.message} </p>
                       
                   )}

                   

                   <Text fontSize="14px" fontWeight="light" mt="2rem">Não se preocupe, suas informações ficarão seguras.</Text>

               </Box>
                </Reveal>
               

                </Flex>


                <Reveal>
                {isWideVersion && (
                    <Image mt="6.5rem" boxShadow="revert" boxSize={["sm", "sm", "sm", "80", "sm"]} src="/images/security.svg" alt="" />
                )}
                </Reveal>
                
                    
                

            </Flex>

            

        </Flex>
     )
}

export async function getServerSideProps() {
    
}