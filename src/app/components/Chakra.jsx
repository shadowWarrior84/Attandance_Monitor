'use client'
// import { ChakraProvider } from '@chakra-ui/react'
import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() => import("@chakra-ui/react").then(
  (mod) => mod.ChakraProvider)
);
import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'


// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })


const Chakra = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}

export default Chakra