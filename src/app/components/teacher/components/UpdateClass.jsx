import { Box, Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { MdTipsAndUpdates } from "react-icons/md"
import { ImCheckboxChecked } from "react-icons/im"

import { classesData } from "./classesData"
import { useEffect, useState } from "react"
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs"

const TableHelper = ({change, id, teacher, held, total }) => {

    const [hClass, setHClass] = useState(held)
    const [tClass, setTClass] = useState(total)

    const handleClick = (id) => {
        change.push(id)
        console.log(change)
    }

    return (
        <Tr>
            <Td>{teacher}</Td>
            <Td>
                <Box display={"flex"} >
                    <Box>
                        <Button  boxSize={8} leftIcon={<BsFillArrowUpSquareFill />} colorScheme='teal' variant='solid' onClick={() => (setHClass(hClass + 1), handleClick(id))}/>
                        {/* <BsFillArrowUpSquareFill color="green" size={30} onClick={() => setHClass(hClass + 1)} /> */}
                    </Box>
                    <Box ml={2} mr={2}>
                        <FormControl id="hClass">
                            <Input type="number" placeholder={hClass} value={hClass} maxW={14} onChange={(e) => setHClass(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Button isDisabled={hClass > 0 ? false : true} boxSize={8} leftIcon={<BsFillArrowDownSquareFill />} colorScheme='red' variant='solid' onClick={() => setHClass(hClass - 1)}/>
                    {/* <BsFillArrowDownSquareFill color="red" size={30} onClick={() => setHClass(hClass - 1)} /> */}
                </Box>

            </Td>
            <Td>
                <Box display={"flex"} ml={20} mr={0}>
                    <Button  boxSize={8} leftIcon={<BsFillArrowUpSquareFill />} colorScheme='teal' variant='solid' onClick={() => setTClass(tClass + 1)}/>
                    {/* <BsFillArrowUpSquareFill color="green" size={30} onClick={() => setTClass(tClass + 1)} /> */}
                    <Box ml={2} mr={2}>
                        <FormControl id="tClass">
                            <Input type="number" placeholder={tClass} value={tClass} maxW={14} onChange={(e) => setTClass(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Button isDisabled={tClass > 0 ? false : true} boxSize={8} leftIcon={<BsFillArrowDownSquareFill />} colorScheme='red' variant='solid' onClick={() => setTClass(tClass - 1)}/>
                    {/* <BsFillArrowDownSquareFill color="red" size={30} onClick={() => setTClass(tClass - 1)} /> */}
                </Box>

            </Td>
            {/* <Td isNumeric>
                
                <PinInput defaultValue={`${tClass}`}>
                    <PinInputField />
                </PinInput>
            </Td> */}
        </Tr>
    )
}

const UpdateClass = ({updateEleTeacher}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const [data,setData] = useState(updateEleTeacher)

    const change = []

    useEffect(()=>{
        setData(updateEleTeacher)
    },[updateEleTeacher])

    const handleSubmit = async() => {

    }

    return (
        <>
            <Button onClick={onOpen} rightIcon={<MdTipsAndUpdates />}>Update Class</Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW={{base: "100%", md: "40%"}}>
                    <ModalHeader>Update Class</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Teacher</Th>
                                        <Th>Class Held</Th>
                                        <Th isNumeric>Total Class</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.map((data, i) => (
                                        <TableHelper key={i} change={change} id={data._id} teacher={data.name} held={data.classAttend} total={data.totalClass} />
                                    ))}
                                    {/* {classesData.map((data, i) => (
                                        <TableHelper key={i} teacher={data.Teacher} held={data.classesHeld} total={data.totalClass} />
                                    ))} */}
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </ModalBody>

                    <ModalFooter>
                        <Button leftIcon={<ImCheckboxChecked />} colorScheme='whatsapp' mr={4} onClick={handleSubmit}>Update</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateClass