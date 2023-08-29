import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constant'


const Header = ({title}) => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: colors.bgPrimary,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",


    },
    text: {
        color: colors.textSecondary,
        fontWeight: "bold",
        fontSize: 30,
       

    }
})