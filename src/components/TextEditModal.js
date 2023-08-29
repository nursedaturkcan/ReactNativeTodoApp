import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/constant';
import CustomInput from './CustomInput';

const TextEditModal = ({ visible, closeModal ,willEditText, setWillEditText, onConfirm, eror , errMessage}) => {
    return (
      <Modal visible={visible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Güncelle</Text>
          <CustomInput value={willEditText} onChangeText={(text)=>setWillEditText(text)} placeholder={"Güncellenecek todo'yu yazınız..."}/>
         {
            eror && ( <Text style={styles.validationText}>{errMessage}</Text>)
         }
          <View style={styles.buttonWrapper}> 
          <TouchableOpacity onPress={closeModal} style={styles.closeButtonWrapper}>
            <Text style={styles.closeButtonText}>Kapat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButtonWrapper} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Onayla</Text>
          </TouchableOpacity>
          </View>
        
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    modalContainer: {
        borderWidth:1,
      flex: 8,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.modalBackground, 
      padding: 20,
    },
    modalContentWrapper:{
        backgroundColor:colors.bgPrimary,
        justifyContent:"center",
        alignItems:"center",
        width:"80%",
        padding:20,
        borderRadius:4
    },
    title:{
        color:colors.textPrimary,
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    },
    buttonWrapper:{
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
        marginTop:20
    },
    closeButtonWrapper:{
        borderWidth:1,
        borderColor:colors.textPrimary,
        paddingVertical:6,
        paddingHorizontal:30,
        backgroundColor:colors.textSecondary
    },
    closeButtonText:{
        color:colors.textPrimary,
        fontWeight:"bold"
    },
    confirmButtonWrapper:{
        borderWidth:1,
        borderColor:colors.textPrimary,
        paddingVertical:6,
        paddingHorizontal:30,
        backgroundColor:colors.darkGreen
    },
    confirmButtonText:{
        color:colors.textSecondary,
        fontWeight:"bold"
    },
    validationText:{
        color:colors.redColor
    }
  });
export default TextEditModal  