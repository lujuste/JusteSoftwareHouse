import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage} from '@chakra-ui/react'
import {FieldError} from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;

} 

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null,  ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error} >

        {!label && <FormLabel htmlFor={name}>{label}</FormLabel>}    

            <ChakraInput name={name}
                id={name}
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
        </FormControl>
    )
}