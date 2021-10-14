import {FormControl, useToast, Icon, Tooltip, Flex, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage} from '@chakra-ui/react'
import {FieldError} from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;

} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, type,  ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error} >

        {!label && <FormLabel  htmlFor={name}>{label}</FormLabel>}    

            <ChakraInput name={name}
                id={name}
                type={name}
                ref={ref}
                {...rest}
                mt="0.75rem"
                mx="auto"
                px="2rem"
                flex="1"
                maxWidth={420}
                bgColor="transparent"
                alignContent="center"
                focusBorderColor= "green.300"
                variant="filled"
                size="lg"
                placeholder={label}
                color="white"

            />

            {!!error && (
                <Flex mt="1rem">
                    <Tooltip label={error.message} bg="red.500">
                        <FormErrorMessage label={error.message} mt={0} zIndex="tooltip">
                            <Icon mr="10px" as={FiAlertCircle} color="red.500" w={4} h={4} /> {error.message}
                        </FormErrorMessage>
                     </Tooltip>
                </Flex>
                
            ) }
        </FormControl>
    )
}

export const Input = forwardRef(InputBase); 