import {Flex, Heading, Text, Image, Container, Button, Box, FormControl, Input, FormLabel} from '@chakra-ui/react'
import { toast, ToastContainer } from 'react-toastify';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import {FormActions, useForm} from '../../contexts/FormContext'
import ImageJuste from '../../../public/images/warranty.svg'
import { ChangeEvent} from 'toasted-notes/node_modules/@types/react';
import {useEffect} from 'react'

export const TalkProject = () => {
    const {state, dispatch}  = useForm()  
    const router = useRouter()

    console.log(state)

    useEffect(() => {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 1
      })
    }, [])
  
    const handleNextStep = () => {
      if(state.name !== '' && state.email !== '' && state.phone !== '') {
        router.push('/contact2')
      } else {
        toast.error("Preencha todos os campos, por favor.", {
          position: toast.POSITION.TOP_RIGHT
        });

         }
      
    }

    const handleFormChangeName = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      
          dispatch({
            type: FormActions.setName,
            payload: e.target.value
          })

          Cookies.set('setNameCookie', e.target.value)
    }

    const handleFormChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()

      dispatch({
        type: FormActions.setEmail,
        payload: e.target.value,
      })

      Cookies.set('setEmailCookie', e.target.value)
    }

    const handleFormChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault() 

        dispatch({
          type: FormActions.setPhone,
          payload: e.target.value,
        })

        Cookies.set('setPhoneCookie', e.target.value)
    }

    console.log(state)



    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 1,
      });

      const content = (
        <Flex py={4}>
         <Text>oi</Text>
        </Flex>
      );
    
      const content2 = (
        <Flex py={4}>
         <Text>tchau</Text>
        </Flex>
      );
    
      const content3 = (
        <Flex py={4}>
         <Text>helloooo</Text>
        </Flex>
      );
    
      const steps = [
        { label: 'Step 1', content },
        { label: 'Step 2', content },
        { label: 'Step 3', content },
        
      ];

    return (
        <Flex justify="center" mt="5rem" mb="2rem" mx="auto" maxW={1480} minH="90vh">
            <Flex align="center" flexDir="column" justify="space-around"  mx={5} w="100%" maxW="500px"  h="100vh">
                <Heading bgClip="text" fontWeight="bold"  bgGradient="linear(to-r, #8257E5, #04D361)" fontSize="60px" mt="2rem" >Agora falta <br/> pouco!</Heading>
                <Text mt="-2rem" fontSize="36px" fontWeight="light" color="white" >Conte mais sobre <br/>
                seu projeto: </Text>
                <Image mt="-1rem" src={ImageJuste} maxW={300} w="100%" alt="" />
                
            </Flex>

            <Flex flex="1" flexDir="column" mt="3rem" justifyContent="center" mx={5} w="600px" h="90vh">

                <Flex as="form" boxShadow="dark-lg" align="center" justify="center" flexDir="column" mt="3rem" mx="auto" w="100%" maxW="560px" h="560px" bg="gray.300" opacity="1" borderRadius="15px" >

                    
                    
                    <Box justifyContent="center" display="flex" alignContent="center" p="2.5" mt="2rem" borderRadius="15px" maxW="400px" w="100%" h="60px" bgColor="gray.800" >
                      <FormControl isRequired >
                        <Input type="name" value={state.name} onChange={handleFormChangeName} id="name" placeholder="Insira seu nome" />
                      </FormControl>
                    </Box>   
                    <Box p="2.5" mt="2rem" borderRadius="15px" maxW="400px" w="100%" h="60px" bgColor="gray.800" >
                    <FormControl>
                        <Input type="email" id="email" value={state.email} onChange={handleFormChangeEmail} placeholder="Insira seu melhor email" />
                      </FormControl>
                    </Box>  

                    <Box p="2.5" mt="2rem"  borderRadius="15px" maxW="400px" w="100%" h="60px" bgColor="gray.800" >
                        <FormControl>
                          <Input placeholder="Insira seu celular" onChange={handleFormChangePhone} value={state.phone} type="number" id="phone" />
                        </FormControl>
                    </Box>

                    <Button onClick={handleNextStep}  mt="4rem" w="250px" h="80px" bgColor="green.300" >PROXIMO</Button> 
                </Flex>

                <Flex flex="1" flexDir="column" >
                
                <Steps mt="2rem" mx="auto" w="300px" activeStep={activeStep}>
                {steps.map(({ label}) => (
                <Step key={label}>
                
                     </Step>
                    ))}
                </Steps>

                
                
                </Flex>
                
            </Flex>
        </Flex>
    )
}