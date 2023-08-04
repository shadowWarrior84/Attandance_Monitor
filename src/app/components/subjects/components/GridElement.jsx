import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
} from '@chakra-ui/react'

const GridElement = () => {
    return (
        <Box p={4}>
            <Heading textAlign={"center"} color={"#6082B6"}>Percentage of Classes</Heading>
            <Box boxShadow={"2xl"} rounded={"2xl"} mt={4}>
                <TableContainer>
                    <Table variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th>Subject</Th>
                                <Th>No of Class</Th>
                                <Th isNumeric>Total Attended</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Power System</Td>
                                <Td>8</Td>
                                <Td isNumeric>8</Td>
                            </Tr>
                            <Tr>
                                <Td>Electrical Machines</Td>
                                <Td>7</Td>
                                <Td isNumeric>7</Td>
                            </Tr>
                            <Tr>
                                <Td>Control System</Td>
                                <Td>8</Td>
                                <Td isNumeric>8</Td>
                            </Tr>
                            <Tr>
                                <Td>Power Electronics</Td>
                                <Td>8</Td>
                                <Td isNumeric>8</Td>
                            </Tr>
                            <Tr>
                                <Td>Open Elective</Td>
                                <Td>3</Td>
                                <Td isNumeric>3</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Total</Th>
                                <Th>34</Th>
                                <Th isNumeric>34</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
            {/* <Heading as='h4' size='lg' textAlign={"center"} color={"#6082B6"} mt={4}>
                Teachers
            </Heading> */}
            <Box boxShadow={"2xl"} rounded={"2xl"} mt={8}>
                <TableContainer>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>Subject</Th>
                                <Th>Remarks</Th>
                                <Th isNumeric>Percentage</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Power System</Td>
                                <Td>Excellent</Td>
                                <Td isNumeric>100%</Td>
                            </Tr>
                            <Tr>
                                <Td>Electrical Machines</Td>
                                <Td>Excellent</Td>
                                <Td isNumeric>100%</Td>
                            </Tr>
                            <Tr>
                                <Td>Control System</Td>
                                <Td>Excellent</Td>
                                <Td isNumeric>100%</Td>
                            </Tr>
                            <Tr>
                                <Td>Power Electronics</Td>
                                <Td>Excellent</Td>
                                <Td isNumeric>100%</Td>
                            </Tr>
                            <Tr>
                                <Td>Open Elective</Td>
                                <Td>Excellent</Td>
                                <Td isNumeric>100%</Td>
                            </Tr>


                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Overall</Th>
                                <Th>Excellent</Th>
                                <Th isNumeric>100%</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default GridElement