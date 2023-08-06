"use client"
import { Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
// import SideBar from '../imp/SideBar'
import UserInfo from './components/UserInfo'
import UserField from './components/UserField'
import AppBar from '../hero/components/AppBar'

const page = () => {
  return (
    <>
      {/* <Grid
      h='100vh'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} display={{base: "none", md: "grid"}} >
          <SideBar/>
        </GridItem> */}
        <GridItem colSpan={{base: 5, md: 4}} h={"40vh"} >
          <AppBar/>
          <UserInfo/>
        </GridItem>
        <GridItem colSpan={{base: 5, md: 4}}  h={"57vh"} overflowY={"scroll"} sx={{'::-webkit-scrollbar':{display:'none'}}} >
          <UserField/>  
        </GridItem>
      {/* </Grid> */}
    </>
  )
}

export default page