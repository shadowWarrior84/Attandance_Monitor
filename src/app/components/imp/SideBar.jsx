import { Box, GridItem, Heading } from '@chakra-ui/react'
import SideBarItem from '../hero/components/SideBarItem'
import { sideBarData } from '../../components/hero/components/sideBarData'

const SideBar = () => {
  return (
    <>
        <GridItem rowSpan={2} colSpan={1} bgColor='	#FAF9F6' h={"full"} >
        <Box>
          <Heading as='h4' size='md' p={6} color={"purple.500"} textAlign={"center"}>
            Admin Panel
          </Heading>
          <hr/>
            <Box>

              {sideBarData.map((data, i)=>(
                <SideBarItem key={i} title={data.title} options={data.options} icon={data.icon}/>
              ))}
            </Box>
        </Box>
        {/* <Box display={"flex"} flexDirection={"column"} p={4} justifyContent={"space-around"} h={"67vh"}>
            
        </Box> */}
        </GridItem>
    </>
  )
}

export default SideBar