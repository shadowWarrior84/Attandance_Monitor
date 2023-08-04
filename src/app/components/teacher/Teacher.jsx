"use client"
import { Grid, GridItem } from '@chakra-ui/react'
import SideBar from '../imp/SideBar'
import TableElement from './components/TableElement'
import AppBar from '../hero/components/AppBar'


const Teacher = () => {
  return (
    <Grid
    h='100vh'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4} 
    >
      <GridItem rowSpan={2} colSpan={1} display={{base: "none", md: "grid"}} >
        <SideBar/>
      </GridItem>
      <GridItem colSpan={{base: 5, md: 4}} rowSpan={2}  bg='#FAF9F6'>
        <AppBar/>
        <TableElement/>
      </GridItem>
      {/* <GridItem colSpan={4} bg='#FAF9F6' h={"57vh"} overflowY={"scroll"} sx={{'::-webkit-scrollbar':{display:'none'}}}>
        <UserField/>  
      </GridItem> */}
    </Grid>
  )
}

export default Teacher