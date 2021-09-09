import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface NavMenuProviderProps {
    children: ReactNode
}

type NavMenuDrawerContextData = UseDisclosureReturn

const NavMenuContext = createContext({} as NavMenuDrawerContextData)

export function NavMenuProvider({ children }: NavMenuProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    return (
        <NavMenuContext.Provider value={disclosure}>
            {children}
        </NavMenuContext.Provider>
    )
}

export const useMenuDrawer = () => useContext(NavMenuContext)