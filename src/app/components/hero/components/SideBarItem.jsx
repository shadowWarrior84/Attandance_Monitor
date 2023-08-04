import { Box, List, ListIcon, ListItem, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Link from 'next/link'
import { MenuContext } from '@/app/context/MenuContext'


const ListNew = ({title, icon, link}) => {
  
  const { active, setActive, toggle }  = useContext(MenuContext)
    

  const handleClick = () => {
    setActive(title.toLowerCase())
    // toggle()
  }
 


  return(
    <>
      <ListItem _hover={{bg: "#A7A6BA", rounded: "2xl"}} p={1} bg={active == title.toLowerCase() && "#A7A6BA"} rounded={active == title.toLowerCase() && "2xl"}>
        <ListIcon as={icon} color='purple.500' boxSize={5}/>
        <Link href={`${link}`} onClick={handleClick}>{title}</Link>
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