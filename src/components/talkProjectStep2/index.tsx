import {Flex, Heading, Text, Image, Button, Input, Container, Box, FormControl, Textarea, Spinner} from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import {FormActions, useForm} from '../../contexts/FormContext'
import ImageJuste from '../../../public/images/warranty.svg'
import { ChangeEvent } from 'toasted-notes/node_modules/@types/react';
import { useEffect, useState } from 'react';


export const TalkProjectStep2 = () => {

  const {state, dispatch}  = useForm()  

  const [loading, setLoading] = useState(false)

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

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 2,
  });

  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])
  

    const handleNextStep = async () => {
     
        try {
          if(state.message !== '') {

            setLoading(true)
             await fetch('/api/getCustomers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: state.name,
                email: state.email,
                phone: state.phone,
                message: state.message
              }),     
            }).then(response => router.push('/contact3') )
            setLoading(false)
           
              
          } else {
            toast.error("Preencha as informações, por favor.", {
              position: toast.POSITION.TOP_RIGHT
            });
          }
        } catch(err) {
          console.log(err)
        }
        
        console.log(state)
      
    }

    const handleMessage = async(e: ChangeEvent<HTMLTextAreaElement>) => {
            e.preventDefault()
            dispatch({
            type: FormActions.setMessage,
            payload: e.target.value
          })
            Cookies.set('setMessageCookie', e.target.value)  
    }

    console.log(state)

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
        <Flex justify="center" mt="7rem" mb="2rem" mx="auto" maxW={1480} minH="90vh">
            <Flex align="center" flexDir="column" justify="space-evenly" mx={5} w="100%" maxW="500px"  h="100vh">
                <Heading textShadow="dark-lg" bgClip="text" fontWeight="bold"  bgGradient="linear(to-r, #8257E5, #04D361)"  fontSize="60px" mt="0rem" >Agora falta <br/> pouco!</Heading>
                <Text textShadow="dark-lg" mt="-2rem"  fontSize="36px" fontWeight="light" color="white" >Conte mais sobre <br/>
                seu projeto: </Text>
                <Image mt="-1rem" src={ImageJuste} maxW={300} w="100%" alt="" />
                
            </Flex>

            <Flex flex="1" flexDir="column" mt="3rem" justifyContent="center" mx={5} w="600px" h="90vh">

                <Flex as="form" p="10" boxShadow="dark-lg" align="center" justify="space-around" flexDir="column" mt="3rem" mx="auto" w="100%" maxW="560px" h="560px" bg="gray.300" opacity="1" borderRadius="15px" >
                {loading ? (<Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="green.300"
                            color="#8257E5"
                            size="xl"
/>) : (
                  <>
                <Container p="2"  maxW="xl" centerContent >
                <Heading textShadow="dark-lg" maxW="420px" fontWeight="regular" fontSize="22px"> {`Certo ${state.name}, agora conte mais sobre o projeto e as funcionalidades em poucas linhas 🤗`} </Heading>
                </Container>
                <Box justifyContent="center" display="flex" alignContent="center" p="2.5" mt="2rem" borderRadius="15px" maxW="400px" w="100%" h="300px" bgColor="gray.800" >
                      <FormControl isRequired >
                        <Textarea onChange={handleMessage} maxW="400px" p="10" h="200px" type="multiliner" id="message" placeholder="O que está pensando?" />
                      </FormControl>
                </Box>
                <Button onClick={handleNextStep}  mt="4rem" w="250px" h="100px" bgColor="green.300" >PROXIMO</Button>  
                </>
)}
                
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