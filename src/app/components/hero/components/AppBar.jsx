import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
// import { FiChevronDown } from "react-icons/fi"
// import { BsBellFill } from "react-icons/bs"
import BurgerMenu from '../../imp/burgerMenu/BurgerMenu'

const AppBar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} bg={""} w={"100%"} p={"5px 5px 5px 5px"}>
        <Box display={{base: "flex", md: "none"}}>
          <BurgerMenu/>
        </Box>
        <Text fontSize="2xl" fontFamily={"Work sans"} color={"purple.500"} fontStyle={"bold"}>
          Dashboard
        </Text>
        <div>

        
            {/* <Menu>
                <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                    <Avatar size={"sm"} cursor={"pointer"} name={"abcd"} src={"./placeholder.jpg"}/>
                </MenuButton>
                <MenuList>
                    <MenuItem mt={2}>Download</MenuItem>
                    <MenuItem mt={2}>Create a Copy</MenuItem>
                    <MenuItem mt={2}>Mark as Draft</MenuItem>
                    <MenuItem mt={2}>Delete</MenuItem>
                    <MenuItem mt={2}>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu> */}
        </div>
        
      </Box>
  )
}

export default AppBar