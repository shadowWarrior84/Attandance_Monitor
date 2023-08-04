import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Heading,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { GiTeacher } from 'react-icons/gi'
import UpdateModal from './UpdateModal'
import UpdateClass from './UpdateClass'

const TableElement = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box p={8}>
            <Heading textAlign={"center"} color={"#6082B6"}>Classes Per Teacher</Heading>

            <Box boxShadow={"2xl"} rounded={"2xl"} mt={2}>
                <TableContainer>
                    <Table size='md'>
                        <Thead>
                            <Tr>
                                <Th>Teacher</Th>
                                <Th>Classes Held</Th>
                                <Th isNumeric>Total Classes</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>JCB</Td>
                                <Td>4</Td>
                                <Td isNumeric>4</Td>
                            </Tr>
                            <Tr>
                                <Td>TKS</Td>
                                <Td>8</Td>
                                <Td isNumeric>8</Td>
                            </Tr>
                            <Tr>
                                <Td>JD</Td>
                                <Td>8</Td>
                                <Td isNumeric>8</Td>
                            </Tr>
                            <Tr>
                                <Td>SB</Td>
                                <Td>6</Td>
                                <Td isNumeric>6</Td>
                            </Tr>
                            <Tr>
                                <Td>RD</Td>
                                <Td>6</Td>
                                <Td isNumeric>6</Td>
                            </Tr>
                            <Tr>
                                <Td>AB</Td>
                                <Td>6</Td>
                                <Td isNumeric>6</Td>
                            </Tr>
                            <Tr>
                                <Td>SST</Td>
                                <Td>4</Td>
                                <Td isNumeric>4</Td>
                            </Tr>
                            <Tr>
                                <Td>AB(OE)</Td>
                                <Td>4</Td>
                                <Td isNumeric>4</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Total</Th>
                                <Th>46</Th>
                                <Th isNumeric>46</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} mt={8}>
                <Box>
                    <UpdateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
                </Box>
                <Box>
                    <UpdateClass/>
                </Box>
            </Box>
        </Box>
    )
}

export default TableElement