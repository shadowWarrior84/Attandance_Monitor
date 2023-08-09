import { Box, List, ListIcon, ListItem, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Link from 'next/link'
import { MenuContext } from '@/app/context/MenuContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const ListNew = ({title, icon, link}) => {
  
  const { active, setActive, toggle, setUser, setOn }  = useContext(MenuContext)
  // const { active, setActive, toggle, setUser, setOn }  = useContext(UserContext)

  const router = useRouter()  

  const handleClick = () => {
    if( title !== "Logout"){
      setActive(title.toLowerCase())
    }
    // toggle()
    if( title === "Logout"){
      axios.post("http://localhost:3000/api/auth/logout")
      localStorage.removeItem("userInfo")
      setUser({})
      setOn(false)
      setActive("dashboard")
      router.push("/")
      router.refresh()
    }
  }
 


  return(
    <>
      <ListItem _hover={{bg: "#A7A6BA", rounded: "2xl"}} p={1} bg={active == title.toLowerCase() && "#A7A6BA"} rounded={active == title.toLowerCase() && "2xl"}>
        <ListIcon as={icon} color='purple.500' boxSize={5}/>
        {
          title === "Logout" ? <Link href={`/`} onClick={handleClick}>{title}</Link> :
          <Link href={`${link}`} onClick={handleClick}>{title}</Link>
        }
      </ListItem>
    </>
  )
}

const SideBarItem = ({title, options, icon}) => {

  return (

    <Box>
      <Box display={"flex"} justifyContent={"space-between"} flexDir={"column"}>
        <List spacing={3} margin={4}>
            <Text fontSize='lg' color={"#778899"}>{title}</Text>
            {options && options.map((option, i) => (
              <ListNew key={i} title={option.title} icon={option.icon} link={option.link}/>
            ))}
        </List>
        

      </Box>
    </Box>

  )
}

export default SideBarItem