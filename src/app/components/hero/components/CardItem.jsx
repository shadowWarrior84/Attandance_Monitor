import { Card, CardBody, Box, Icon, Stack} from '@chakra-ui/react'
import StatItem from './StatItem'
import { GiJusticeStar } from 'react-icons/gi'

const CardItem = () => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline' width={60}
>
  <Box display={"flex"} gap={8} justifyContent={"space-between"}>
    <Box textAlign={"center"} display={"flex"} justifyContent={"center"} alignItems={"center"}>

      <Icon as={GiJusticeStar} boxSize={16}  />
    </Box>

    <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
      
      <Stack>
        <CardBody>  
          <StatItem/>
        </CardBody>
      </Stack>
    </Box>
  </Box>
</Card>
  )
}

export default CardItem