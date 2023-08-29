import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constant'
import CustomIcon from './CustomIcon'

const CustomInput = ({ placeholder, keyboardType, multiline = false, hasIcon = false, onIconPress = () => {}, value, onChangeText = () => {} }) => {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          value={value}
          onChangeText={onChangeText}
        />
        {hasIcon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconWrapper}>
            <CustomIcon name={"add-circle-outline"} size={30} color={colors.bgPrimary} />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  

export default CustomInput

const styles = StyleSheet.create({
    wrapper:{
       marginHorizontal:10,
       marginVertical:10,
       flexDirection:"row",
       alignItems:"center"
       
    },
    input:{
        borderWidth:1,
        borderColor:colors.textPrimary,
        padding:10,
        fontSize:16,
        fontWeight:"700",
        color:colors.textPrimary,
        borderRadius:5,
        flex:1,
        marginRight:10
    },
    
})