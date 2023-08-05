import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import { useState } from 'react'


const Signup = () => {

    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const handleClick = () => setShow(!show)

    return (
        <VStack spacing={'5px'} color={"black"}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name' onChange={(e) => { setName(e.target.value) }} />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter Your Password' onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='confirmPassword' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter Your Password' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Upload your Picture</FormLabel>
                <Input type='file' p={1.5} accept='image/*'  />
            </FormControl>
            <Button colorScheme='blue' width={"100%"} style={{ marginTop: 15 }} isLoading={loading}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup