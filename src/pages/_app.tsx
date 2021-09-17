import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { NavMenuProvider } from '../contexts/NavMenuContext'
import { useRouter } from 'next/router'
import NextProgress from 'nextjs-progressbar'
import { Provider as NextAuthProvider } from 'next-auth/client'

import 'swiper/css';
import '../components/Slider/styles.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLogin = router.asPath === '/login'

  return (
    <NextAuthProvider session={pageProps.session}>
    <ChakraProvider theme={theme}>
      <NextProgress
        color="#8257E5"
        startPosition={0.3}
        stopDelayMs={200}
        height={2} />
      <ColorModeScript initialColorMode="dark" />
      <NavMenuProvider>
       { !isLogin ? <Header /> : null }
        <Component {...pageProps} />
      </NavMenuProvider>
    </ChakraProvider>
    </NextAuthProvider>
  )
}


export default MyApp
