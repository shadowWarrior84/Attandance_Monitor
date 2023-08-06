import { Box } from '@chakra-ui/react'
import TableElement from './TableElement'

const SideBox = () => {
  return (
    <Box display={"flex"} flexDir={"column"} justifyContent={"space-around"} p={4} h={"67vh"}>
        <Box rounded={"2xl"} boxShadow={"2xl"} marginBottom={4}>
            <TableElement/>
        </Box>
        <Box rounded={"2xl"} boxShadow={"dark-lg"}>
            <TableElement limit={2}/>
        </Box>
    </Box>
  )
}

export default SideBox