import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { AiFillCloseCircle } from "react-icons/ai"
import { MdTipsAndUpdates } from "react-icons/md"
import { ImCheckboxChecked } from "react-icons/im"
import { teacherData } from "./teacherData"
import { useContext, useEffect, useState } from "react"
import { MenuContext } from "@/app/context/MenuContext"
import axios from "axios"

const DataItem = ({teacher, setTeacher, item}) => {

    const handleClick = (tch) => {
        setTeacher(item.filter((data) => data.name !== tch))
    }
    return (
        <>
            {item && item.map((item, i) => (
                <Box key={i} m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                    <Text size={"md"} ml={1} mr={2} >{item.name}</Text>
                    <AiFillCloseCircle onClick={() => handleClick(item.name)} />
                </Box>
            ))}
        </>
    )
}


const UpdateModal = ({ res, updateEleTeacher, setUpdateEleTeacher }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // console.log(res)

    const value = updateEleTeacher

    // console.log(value)
    // const value = res

    const { user } = useContext(MenuContext)
    const toast = useToast()

    const [newTeacher, setNewTeacher] = useState("")
    const [classHeld, setClassHeld] = useState()
    const [totalClass, setTotalClass] = useState()
    const [subject, setSubject] = useState()
    const [loading, setLoading] = useState(false)
    const [teacher, setTeacher] = useState()

    // console.log(teacher)

    useEffect(()=>{
        setTeacher(value)
    },[value])

    const handleClick = (tch) => {
        setTeacher(teacher.filter((data) => data.name !== tch))
    }

    const handleSubmit = async () => {
        // teacher.push({name : newTeacher})
       
        setLoading(true)
        if (!newTeacher || !classHeld || !totalClass || !subject) {
            toast({
                title: "Please Fill all the Fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setLoading(false)
            return
        }

        try {

            const data = {
                userId: user?._id,
                name: newTeacher,
                subject: subject,
                classAttend: classHeld,
                totalClass: totalClass
            }

            const isTrue = await axios.post("http://localhost:3000/api/user/teacher/addNew", data)

            // console.log(isTrue)

            if (isTrue.data.success === true) {
                setTeacher([...teacher,  data ])
                setUpdateEleTeacher([...teacher, data ])
                console.log(teacher)
                toast({
                    title: "Data saved successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                })
                setLoading(false)
            } else {
                toast({
                    title: "Error Occured data not saved",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                })
                setLoading(false)
            }
        } catch (error) {
            toast({
                title: "Error Occured",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            console.log(error)
            setLoading(false)
        }

        // console.log(teacher)
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
                            <Input type="number" placeholder='Total Classes' onChange={(e) => setTotalClass(e.target.value)} />
                        </FormControl>
                        <Box mt={4}>
                            <Text size={"xl"}>Existing Teachers</Text>
                            <Box display={"flex"} mt={2} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                                {/* <DataItem teacher={teacher} setTeacher={setTeacher} item={value}/> */}
                                {teacher && teacher.map((teacher, i) => (
                                    <Box key={i} m={2} display={"flex"} justifyContent={"center"} alignItems={"center"} p={1} rounded={"2xl"} bg={"green.400"}>
                                        <Text size={"md"} ml={1} mr={2} >{teacher.name}</Text>
                                        <AiFillCloseCircle onClick={() => handleClick(teacher.name)}/>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button leftIcon={<ImCheckboxChecked />} colorScheme='whatsapp' mr={4} onClick={handleSubmit} isDisabled={newTeacher.length > 0 ? false : true} isLoading={loading}>Update</Button>
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