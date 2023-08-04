import { Avatar, Box, Heading, Highlight, List, ListItem } from '@chakra-ui/react'

const UserInfo = () => {
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Avatar  size='2xl' name='Segun Adebayo' src='/placeholder.jpg' />
        </Box>
        <Box display={"flex"} flexDir={"column"}>
        <Heading lineHeight='tall' m={1} textColor={"#6082B6"}>
            <Highlight
                query=''
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'purple.500' }}
            >
                John Doe
            </Highlight>
            <List mt={4} spacing={2} fontSize={"md"} fontWeight={"600"} color={"#71797E"}>
                <ListItem>
                    Name: John Doe
                </ListItem>
                <ListItem>
                    Email: JohnDoe@gmail.com
                </ListItem>
                <ListItem>
                    Branch: Electrical Engineering
                </ListItem>
                <ListItem>
                    Course: B.Tech
                </ListItem>
                <ListItem>
                    Semester: 5
                </ListItem>
            </List>
        </Heading>
        </Box>
    </Box>
  )
}

export default UserInfo