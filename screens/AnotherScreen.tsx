import React from 'react'
import { Text } from 'react-native'

type Props = {
    navigation: Object,
}

const AnotherScreen:React.FC<Props> = () => {
  return (
    <Text>AnotherScreen</Text>
  )
}

export default AnotherScreen