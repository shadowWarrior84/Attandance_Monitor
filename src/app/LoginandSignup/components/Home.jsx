"use client"

import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Login from "./Login"
import Signup from "./Signup"

const Home = () => {
    return (
        <Container >
            <Box display="flex" justifyContent="center" p={3} bg={"white"} w="100%" m="40px 0 15px 0" borderRadius={"lg"} borderWidth={"1px"} >
                <Text fontSize={'4xl'} color={"black"}>Attandance</Text>
            </Box>
            <Box bg="white" w={"100%"} p={4} borderRadius={"lg"} borderWidth={"1px"}>
                <Tabs id="tabs" isLazy variant='soft-rounded' colorScheme='green'>
                        <TabList mb={"1em"}>
                            <Tab width={"50%"}>Login</Tab>
                            <Tab width={"50%"}>Signup</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <Signup />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
            </Box>
        </Container>

    )
}

export default Home