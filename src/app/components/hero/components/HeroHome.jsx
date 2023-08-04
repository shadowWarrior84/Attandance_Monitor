import { Box } from '@chakra-ui/react'
import AppBar from './AppBar'
import CardItem from './CardItem'

const HeroHome = () => {
  return (
    <>
    <Box h={19.5}>
        <AppBar/>
      </Box>
      <Box overflowX={{base: "scroll"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"} marginTop={8} sx={{'::-webkit-scrollbar':{display:'none'}}
  }>
        <Box m={4} boxShadow={"dark-lg"} rounded={"2xl"}>
            <CardItem/>
        </Box>
        <Box m={4} boxShadow={"2xl"} rounded={"2xl"}>
            <CardItem/>
        </Box>
        <Box m={4} boxShadow={"dark-lg"} rounded={"2xl"}>
            <CardItem/>
        </Box>
        <Box m={4} boxShadow={"2xl"} rounded={"2xl"}>
            <CardItem/>
        </Box>
        
      </Box>
    </>
  )
}

export default HeroHome