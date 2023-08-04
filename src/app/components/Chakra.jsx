'use client'
// import { ChakraProvider } from '@chakra-ui/react'
import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() => import("@chakra-ui/react").then(
  (mod) => mod.ChakraProvider)
);
import React from 'react'

const Chakra = ({ children }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default Chakra