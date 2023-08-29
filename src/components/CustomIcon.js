import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const CustomIcon = ({name,size,color}) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  )
}

export default CustomIcon

