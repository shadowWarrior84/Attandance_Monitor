import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const router = useRouter()
  
    const toast = useToast()
  
    const handleClick = () => setShow(!show)

    const handleSubmit = async () => {
        const data = {
            email: email,
            password: password
        }

        const result = await axios.post("http://localhost:3000/api/auth/login", data)

        if(result.data.success) {
            router.push("/dashboard")
        }
    }

    return (
        <VStack spacing={'5px'} color={"black"} >
            <FormControl id='emailLogin' isRequired >
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>
            <FormControl id='passwordLogin' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='blue' width={"100%"} style={{ marginTop: 15 }} isLoading={loading} onClick={handleSubmit}>
                Login
            </Button>
            
        </VStack>
    )
}

export default Login