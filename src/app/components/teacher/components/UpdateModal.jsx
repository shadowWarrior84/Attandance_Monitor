import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { AiFillCloseCircle } from "react-icons/ai"
import { MdTipsAndUpdates } from "react-icons/md"
import { ImCheckboxChecked } from "react-icons/im"
import { teacherData } from "./teacherData"
import { useState } from "react"


const UpdateModal = ({ isOpen, onOpen, onClose }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    const [newTeacher, setNewTeacher] = useState()

    const [teacher, setTeacher] = useState(teacherData)

    const handleClick = (tch) => {
        setTeacher(teacher.filter((data) => data !== tch))
    }

    const handleSubmit = () => {
        setTeacher([...teacher, newTeacher])
    }
    return (
        <>
            <Button onClick={onOpen} rightIcon={<MdTipsAndUpdates />}>Add/Remove Teachers</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add/Remove Teachers</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Tecaher Name</FormLabel>
                            <Input type="text" placeholder='Teacher Name' onChange={(e) => setNewTeacher(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Total Classes Held</FormLabel>
                            <Input type="number" placeholder='Total Classes Held' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Total Classes</FormLabel>
                            <Input type="number" placeholder='Total Classes' />
                        </FormControl>
                        <Box mt={4}>
                            <Text size={"xl"}>Existing Teachers</Text>
                            <Box display={"flex"} mt={2} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                                {teacher.map((teacher, i) => (
                                    <Box key={i} m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                        <Text size={"md"} ml={1} mr={2} >{teacher}</Text>
                                        <AiFillCloseCircle onClick={() => handleClick(teacher)}/>
                                    </Box>
                                ))}

                                {/* <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>SST</Text>
                                    <AiFillCloseCircle/>
                                </Box> */}
                                {/* <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>JCB</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>AB</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>SB</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>JD</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>RD</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>AB(OE)</Text>
                                    <AiFillCloseCircle/>
                                </Box>
                                <Box m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                    <Text size={"md"} ml={1} mr={2}>JD</Text>
                                    <AiFillCloseCircle/>
                                </Box> */}
                            </Box>
                        </Box>
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

export default UpdateModal