"use client"
import { Box, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"} w={"100vw"}>


            <Box padding='6' boxShadow='lg' bg='white' width={"40%"}>

                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='4' />
            </Box>


        </Box>
    )
}

export default Loading