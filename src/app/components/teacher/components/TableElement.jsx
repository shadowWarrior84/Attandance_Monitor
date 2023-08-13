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
import axios from 'axios'
import { useEffect, useState } from 'react'


const TableElement = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    let res
    const [updateEleTeacher,setUpdateEleTeacher] = useState()
    useEffect(()=>{
        const fetchData = async() => {
            res = await getData()
            setUpdateEleTeacher(res)
        }
        fetchData()
    },[])




    // console.log(res)

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

                            {updateEleTeacher && updateEleTeacher?.map((data, i) => (

                                <Tr key={i}>
                                    <Td>{data.name}</Td>
                                    <Td>{data.classAttend}</Td>
                                    <Td isNumeric>{data.totalClass}</Td>
                                </Tr>
                            ))}
                            {/* {res && res?.map((data, i) => (

                                <Tr key={i}>
                                    <Td>{data.name}</Td>
                                    <Td>4</Td>
                                    <Td isNumeric>4</Td>
                                </Tr>
                            ))} */}
                            {/* <Tr>
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
                            </Tr> */}
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
                    <UpdateModal res={res} updateEleTeacher={updateEleTeacher} setUpdateEleTeacher={setUpdateEleTeacher} />
                </Box>
                <Box>
                    <UpdateClass updateEleTeacher={updateEleTeacher} />
                </Box>
            </Box>
        </Box>
    )
}

export async function getData() {

    try {

        const res = await axios.get("http://localhost:3000/api/user/teacher/getTeacher")

        //  const data = "hello"

        return res.data

    } catch (error) {

    }
}

export default TableElement