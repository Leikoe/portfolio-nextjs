import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Flex, ChakraProvider, VStack} from '@chakra-ui/react'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Flex minH='calc(100vh)' justify='center'>
                <VStack w='2xl' >
                    <NavBar/>
                    <Component {...pageProps} />
                </VStack>
            </Flex>
        </ChakraProvider>
    )
}

export default MyApp
