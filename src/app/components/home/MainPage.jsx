"use client"
import { Box, Button, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorMode } from '@chakra-ui/react'
import { BiLogIn } from 'react-icons/bi'
import { FaLocust } from 'react-icons/fa6'
import { HiAcademicCap } from "react-icons/hi"
import { MdLightMode, MdNightlight } from 'react-icons/md'
import SplitWithImage from './MainHero'
import Link from 'next/link'
import SimpleThreeColumns from './Features'
import SmallWithSocial from './Footer'
import { BsMenuButtonWide } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const MainPage = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    const handleClick = () => {
        router.push("/LoginandSignup")
    }

    return (

        <Grid
            templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'

        >
            <GridItem pl='2' area={'header'} >
                <Box display={"flex"} justifyContent={"space-between"} mt={1} textAlign={"center"}>
                    <Box ml={4}>
                        <FaLocust size={40} color='5A0002' />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} w={40}>

                        <Text fontSize={{ base: "3xl", md: "4xl" }} color={"whatsapp.400"} ml={{ base: 0, md: 40 }}>LOCUS</Text>
                    </Box>
                    <Box>
                        <Menu display={{ base: "flex", sm: "none" }}>
                            <MenuButton as={Button} display={{ base: "flex", md: "none" }}>
                                <BsMenuButtonWide />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    <Button onClick={toggleColorMode} size={"sm"} w={"full"}>
                                        {colorMode === 'light' ? <MdNightlight /> : <MdLightMode />}
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    {/* <Link href={"/LoginandSignup"} w={"100%"}>
                                    </Link> */}
                                    <Button size={"sm"} w={"full"} onClick={handleClick} colorScheme='teal' variant='solid'>
                                        Login
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button size={"sm"} w={"full"} onClick={handleClick} colorScheme='teal' variant='outline'>
                                        Signup
                                    </Button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Stack direction='row' spacing={4} display={{ base: "none", md: "flex" }}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MdNightlight /> : <MdLightMode />}
                            </Button>
                            <Link href={"/LoginandSignup"}>
                                <Button leftIcon={<BiLogIn />} size={{ base: "sm", md: "md" }} colorScheme='teal' variant='solid'>
                                    Login
                                </Button>
                            </Link>
                            <Link href={"/LoginandSignup"}>
                                <Button rightIcon={<HiAcademicCap />} size={{ base: "sm", md: "md" }} colorScheme='teal' variant='outline'>
                                    Signup
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </GridItem>

            <GridItem pl='2' area={'main'} h={"120vh"} mt={6}>
                <>
                    <SplitWithImage />
                    {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
                        <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontSize='6xl'
                            fontWeight='extrabold'>Welcome to</Text>
                        <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontSize='6xl'
                            fontWeight='extrabold'> Advance Attandance</Text>
                        <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontSize='6xl'
                            fontWeight='extrabold'> record system.</Text>
                    </Box> */}
                    <Box w={"90"} m={20}>

                        <SimpleThreeColumns />
                    </Box>
                </>
            </GridItem>
            <GridItem pl='2' area={'footer'} h={"7vh"} >
                <SmallWithSocial />
            </GridItem>
        </Grid>
    )
}

export default MainPage