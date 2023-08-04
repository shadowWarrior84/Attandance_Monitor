import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

const StatItem = () => {
  return (
    <StatGroup>
  <Stat>
    <StatLabel fontSize={"2xl"}>JCB</StatLabel>
    <StatNumber fontSize={"2xl"}>4/4</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' fontSize={"2xl"} />
      23.36%
    </StatHelpText>
  </Stat>
</StatGroup>
  )
}

export default StatItem