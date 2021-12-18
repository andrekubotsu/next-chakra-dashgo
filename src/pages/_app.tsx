import { AppProps } from 'next/app'

// importing chakra ui provider for themming purposes
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
