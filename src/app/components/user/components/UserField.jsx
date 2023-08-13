import { MenuContext } from '@/app/context/MenuContext'
import { Box, Button, FormControl, FormLabel, Heading, Input, List, ListItem, useColorModeValue, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useState } from 'react'
import { GrUpdate } from "react-icons/gr"

const UserField = () => {
    const { user, setOn } = useContext(MenuContext)
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [branch, setBranch] = useState("Electrical Engineering")
    const [course, setCourse] = useState("B.Tech")
    const [semester, setSemester] = useState(5)
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const handleSubmit = async () => {

        setLoading(true)
        // if(!email || !password) {
        //     toast({
        //         title: "Please Fill all the Fields",
        //         status: "warning",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom"
        //       })
        //       setLoading(false)
        //       return
        // }

        try {
            
            const data = {
                userId: user?._id,
                name: name,
                email: email
            }

            
    
            const result = await axios.patch("http://localhost:3000/api/user/updateInfo", data)

            // console.log(result.data.user)
 
            
            if(result.data.success) {

                localStorage.removeItem("userInfo")

                localStorage.setItem("userInfo", JSON.stringify(result.data.updateData))

                setOn(true)

                toast({
                    title: "Data updated successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })

                  setLoading(false)
            
            } else {
                toast({
                    title: "Invalid email or password",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })
                  setLoading(false)
            }
            
        } catch (error) {
            console.log(error)
            toast({
                title: "Error Occured",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
              })
            //   console.log(error)
              setLoading(false)
        }

    }


    return (
        <>
            <Heading as='h3' size='lg' textAlign={"center"} color={"purple"} textShadow='1px 1px #ff0000'>
                Account
            </Heading>
            <Box mt={4} ml={4} w={"98%"} display={"flex"} justifyContent={"space-around"} boxShadow={"2xl"} rounded={"2xl"}>
                <Box>
                    <List mt={4} spacing={7} fontSize={"xl"} fontWeight={"600"} color={"black"}>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"} textColor={useColorModeValue("black", "whiteAlpha.400")}>Name:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"} textColor={useColorModeValue("black", "whiteAlpha.400")} >Email:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"} textColor={useColorModeValue("black", "whiteAlpha.400")}>Branch:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"} textColor={useColorModeValue("black", "whiteAlpha.400")}>Course:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"} textColor={useColorModeValue("black", "whiteAlpha.400")}>Semester:</FormLabel>
                            </FormControl>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <List mt={4} spacing={4} fontSize={"xl"} fontWeight={"600"} color={"black"}>
                        <ListItem>
                            <FormControl id='name' isRequired>
                                <Input type='text' placeholder='Enter Your Name' value={`${name}`} onChange={(e) => setName(e.target.value)} textColor={useColorModeValue("black", "whiteAlpha.800")}/>
                            </FormControl>
                            {/* <Input isRequired placeholder='John Doe' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <Input type='email' placeholder='Enter Your Email' value={`${email}`} onChange={(e) => setEmail(e.target.value)} textColor={useColorModeValue("black", "whiteAlpha.800")} />
                            </FormControl>
                            {/* <Input required placeholder='JohnDoe@gmail.com' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='branch' isRequired>
                                <Input type='' placeholder='Enter Your Branch' value={`${branch}`} onChange={(e) => setBranch(e.target.value)} textColor={useColorModeValue("black", "whiteAlpha.800")}/>
                            </FormControl>
                            {/* <Input required placeholder='Electrical Engineering' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='course' isRequired>
                                <Input type='email' placeholder='Enter Your Course' value={`${course}`} onChange={(e) => setCourse(e.target.value)} textColor={useColorModeValue("black", "whiteAlpha.800")} />
                            </FormControl>
                            {/* <Input required placeholder='B.Tech' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='semester' isRequired>
                                <Input type='email' placeholder='Enter Your Semester' value={`${semester}`} onChange={(e) => setSemester(e.target.value)} textColor={useColorModeValue("black", "whiteAlpha.800")} />
                            </FormControl>
                            {/* <Input required placeholder='5' size='md' /> */}
                        </ListItem>
                        <ListItem>
                        </ListItem>
                        <Box mb={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Button leftIcon={<GrUpdate />} colorScheme='purple' variant='solid' onClick={handleSubmit} isLoading={loading}>
                                Update
                            </Button>
                        </Box>
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default UserField