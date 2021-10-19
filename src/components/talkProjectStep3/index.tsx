import {Flex, Heading, Text, Image, Button, Input, Container, Box, FormControl, Textarea} from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import {FormActions, useForm} from '../../contexts/FormContext'
import ImageJuste from '../../../public/images/warranty.svg'
import { ChangeEvent } from 'toasted-notes/node_modules/@types/react';
import { useEffect } from 'react';


export const TalkProjectStep3 = () => {

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 3,
  });

  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [])
  
    const {state, dispatch}  = useForm()  
  
    const handleNextStep = () => {
        router.push("/")
    }

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
          
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

                <Flex as="form" p="10" boxShadow="dark-lg" align="center" justify="center" flexDir="column" mt="3rem" mx="auto" w="100%" maxW="560px" h="560px" bg="gray.300" opacity="1" borderRadius="15px" >
                <Heading>Obrigado!!!</Heading>
                <Button onClick={handleNextStep}  mt="4rem" w="250px" h="100px" bgColor="green.300" >Voltar à home</Button>  

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