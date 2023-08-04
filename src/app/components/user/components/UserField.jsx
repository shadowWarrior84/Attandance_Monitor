import { Box, Button, FormControl, FormLabel, Heading, Input, List, ListItem } from '@chakra-ui/react'
import { useState } from 'react'
import { GrUpdate } from "react-icons/gr"

const UserField = () => {
    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("JohnDoe@gmail.com")
    const [branch, setBranch] = useState("Electrical Engineering")
    const [course, setCourse] = useState("B.Tech")
    const [semester, setSemester] = useState(5)
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
                                <FormLabel fontSize={"xl"}>Name:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"}>Email:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"}>Branch:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"}>Course:</FormLabel>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <FormLabel fontSize={"xl"}>Semester:</FormLabel>
                            </FormControl>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <List mt={4} spacing={4} fontSize={"xl"} fontWeight={"600"} color={"black"}>
                        <ListItem>
                            <FormControl id='name' isRequired>
                                <Input type='text' placeholder='Enter Your Name' value={`${name}`} onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                            {/* <Input isRequired placeholder='John Doe' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='email' isRequired>
                                <Input type='email' placeholder='Enter Your Email' value={`${email}`} onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            {/* <Input required placeholder='JohnDoe@gmail.com' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='branch' isRequired>
                                <Input type='' placeholder='Enter Your Branch' value={`${branch}`} onChange={(e) => setBranch(e.target.value)} />
                            </FormControl>
                            {/* <Input required placeholder='Electrical Engineering' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='course' isRequired>
                                <Input type='email' placeholder='Enter Your Course' value={`${course}`} onChange={(e) => setCourse(e.target.value)} />
                            </FormControl>
                            {/* <Input required placeholder='B.Tech' size='md' /> */}
                        </ListItem>
                        <ListItem>
                            <FormControl id='semester' isRequired>
                                <Input type='email' placeholder='Enter Your Semester' value={`${semester}`} onChange={(e) => setSemester(e.target.value)} />
                            </FormControl>
                            {/* <Input required placeholder='5' size='md' /> */}
                        </ListItem>
                        <ListItem>
                        </ListItem>
                        <Box mb={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Button leftIcon={<GrUpdate />} colorScheme='purple' variant='solid'>
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