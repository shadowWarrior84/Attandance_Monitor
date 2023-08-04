'use client'
import { Box, Grid, GridItem} from '@chakra-ui/react'
// import CardItem from './components/CardItem'
// import SideBarItem from './components/SideBarItem'
// import AppBar from './components/AppBar'
import ChartItem from './components/ChartItem'
import SideBox from './components/SideBox'
// import { sideBarData } from './components/sideBarData'
import HeroHome from './components/HeroHome'
import SideBar from '../imp/SideBar'

const Hero = () => {
  return (
        <Grid
    h='100vh'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
    >
    <GridItem rowSpan={2} colSpan={1} display={{base: "none", md: "grid"}}  >
      <SideBar/>
      
    </GridItem>
    <GridItem colSpan={{base: 5, md: 4}} h={"30vh"}  >
      <HeroHome/>
      
    </GridItem>
   
    <GridItem colSpan={{base: 5, md: 4}} bg='' h={"67vh"} overflowY={"scroll"} sx={{'::-webkit-scrollbar':{display:'none'}}
  }> 
    <Box>
        <Box display={{base: "block", md: "flex"}} justifyContent={"space-between"}>
          <Box flex={6} bgColor={"white"}>
            <ChartItem/>
          </Box>
          <Box flex={2} h={"67vh"}>
            <SideBox/>
          </Box>
        </Box>
    </Box>

    </GridItem>
    </Grid>
  )
}

export default Hero