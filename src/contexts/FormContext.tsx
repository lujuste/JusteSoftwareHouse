import { createContext, useContext, useReducer, ReactNode } from 'react'
import Cookies from "js-cookie";

type State = {
    currentStep: number;
    name: string;
    email: string;
    phone: string;
    message: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const FormContext = createContext<ContextType|undefined>(undefined)

const initialData: State = {
    currentStep: 0,
    name: Cookies.get('setNameCookie') ? (Cookies.get('setNameCookie')) : '',
    email: Cookies.get('setEmailCookie') ? (Cookies.get('setEmailCookie')) : '',
    phone: Cookies.get('setPhoneCookie') ? (Cookies.get('setPhoneCookie')) : '',
    message: Cookies.get('setMessageCookie') ? (Cookies.get('setMessageCookie')) : '',
}

export enum FormActions {
    setCurrentStep,
    setName,
    setEmail,
    setPhone,
    setMessage,
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setPhone:
            return {...state, phone: action.payload}
        case FormActions.setMessage:
            return {...state, message: action.payload}
            default:
                return state;
    }   
}

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}
    return (
        <FormContext.Provider value={value} >
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}