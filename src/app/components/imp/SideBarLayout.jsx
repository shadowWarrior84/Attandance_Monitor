"use client"
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import SideBar from './SideBar'

const SideBarLayout = ({children}) => {
    return (
        <Grid
            h='100vh'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}
        >
            <GridItem rowSpan={2} colSpan={1} display={{ base: "none", md: "grid" }} bg={useColorModeValue("#F8F8FF", "gray.900")} >
                <SideBar />

            </GridItem>
            {children}
        </Grid>
    )
}

export default SideBarLayout