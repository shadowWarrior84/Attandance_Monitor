import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { AiFillCloseCircle } from "react-icons/ai"
import { MdTipsAndUpdates } from "react-icons/md"
import { ImCheckboxChecked } from "react-icons/im"
import { teacherData } from "./teacherData"
import { useContext, useState } from "react"
import { MenuContext } from "@/app/context/MenuContext"


const UpdateModal = ({res}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // console.log(res)

    const value = res

    const { user } = useContext(MenuContext)

    const [newTeacher, setNewTeacher] = useState("")
    const [classHeld, setClassHeld] = useState()
    const [totalClass, setTotalClass] = useState()
    const [subject, setSubject] = useState()

    const data = {
        id: user?._id,
        name: newTeacher,
        subject: subject,
        classAttend: classHeld,
        classHeld: totalClass
    }


    const [teacher, setTeacher] = useState(value || [])

    const handleClick = (tch) => {
        setTeacher(teacher.filter((data) => data.name !== tch))
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
                        <FormControl isRequired >
                            <FormLabel>Teacher Name</FormLabel>
                            <Input type="text" placeholder='Teacher Name' onChange={(e) => setNewTeacher(e.target.value)} />
                        </FormControl>
                        <FormControl mt={4} isRequired >
                            <FormLabel>Subject</FormLabel>
                            <Input type="text" placeholder='Subject' onChange={(e) => setSubject(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Total Classes Held</FormLabel>
                            <Input type="number" placeholder='Total Classes Held' onChange={(e) => setClassHeld(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4} isRequired>
                            <FormLabel>Total Classes</FormLabel>
                            <Input type="number" placeholder='Total Classes' onChange={(e) => setTotalClass(e.target.value)}/>
                        </FormControl>
                        <Box mt={4}>
                            <Text size={"xl"}>Existing Teachers</Text>
                            <Box display={"flex"} mt={2} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                                {teacher.map((teacher, i) => (
                                    <Box key={i} m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                        <Text size={"md"} ml={1} mr={2} >{teacher.name}</Text>
                                        <AiFillCloseCircle onClick={() => handleClick(teacher.name)}/>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button leftIcon={<ImCheckboxChecked />} colorScheme='whatsapp' mr={4} onClick={handleSubmit} isDisabled={newTeacher.length > 0 ? false : true}>Update</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose} >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateModal