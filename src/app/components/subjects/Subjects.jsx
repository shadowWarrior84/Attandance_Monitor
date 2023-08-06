"use client"
import { Grid, GridItem } from '@chakra-ui/react'
// import SideBar from '../imp/SideBar'
import GridElement from './components/GridElement'
import AppBar from '../hero/components/AppBar'

const Subjects = () => {
  return (
    // <Grid
    // h='100vh'
    // templateRows='repeat(2, 1fr)'
    // templateColumns='repeat(5, 1fr)'
    // gap={4}
    // >
    //   <GridItem rowSpan={2} colSpan={1} display={{base: "none", md: "grid"}} >
    //     <SideBar/>
    //   </GridItem>
      <GridItem colSpan={{base: 5, md: 4}} rowSpan={2}  >
        <AppBar/>
        <GridElement/>
      </GridItem>
    // </Grid>
  )
}

export default Subjects