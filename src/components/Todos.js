import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/constant'
import CustomIcon from './CustomIcon'
import TextEditModal from './TextEditModal';


const Todos = ({ todo = {}, todos = [], setTodos = () => { } }) => {
    // modal'ı açmak ve kapatmak
    const [openModal,setOpenModal]=useState(false);
    const [willEditText,setWillEditText]=useState(todo.text)
    const [eror,setError]=useState(false);
    const [errMessage,setErrMessage]=useState("");
    // silme işlemini yapan fonksiyon
    const deleteTodo = () => {
        Alert.alert("Silme işlemi ", `${todo?.id} numaralı todoyu silmek istediğinize eminmisiniz?`, [{
            text: "Vazgeç",
            onPress: () => { }
        }, {
            text: "Sil",
            onPress: () => { 
                const filteredTodos=todos.filter(item=>item.id !== todo.id)
                setTodos(filteredTodos)
            },
            style: "destructive"
        }])
    }

//   Yapıldı yapılmadı işlemini yapan fonksiyon
const changeCompleted=()=>{
    Alert.alert("Yapıldı", "Görev yapıldı olarak işaretlenecek emin misiniz?", [
        {
            text:"Vazgeç"
        },
        {
            text:"İşaretle",
            onPress:()=>{
                const tempArr=[]
                for(let i=0; i<todos.length;i++){
                    if(todos[i].id !== todo.id){
                        tempArr.push(todos[i])
                    }else{
                        const newTodo={
                            ...todo,
                            completed:!todo.completed

                        }
                        tempArr.push(newTodo)
                    }
                }
                setTodos(tempArr)
            }
        }

    ])
}

// editText yapan fonksiyon
const changeText=()=>{
/*Validation */
if(willEditText===""){
  setError(true)
  setErrMessage(" Text Alanı Boş Bırakılamaz..")
  setTimeout(()=>{
    setError(false)
    setErrMessage(" ")

  },2000)
}
// güncelleme
const tempArray=[]
for (let i = 0; i < todos.length; i++) {
    if(todos[i].id !== todo.id){
        tempArray.push(todos[i])
    }else{
        const updatedTodo={
            ...todo,
            text:willEditText
        }
        tempArray.push(updatedTodo)
    }
    
}
setTodos(tempArray);
setOpenModal(false)
}
    return (
        <View style={styles.todoWrapper}>
            <View style={styles.todoContainer}>
                <View>
                 
                        <Text style={[styles.todoText, todo?.completed && styles.completedTitle]}>{todo?.text}</Text>
                    
              
                        <Text style={styles.date}>{new Date(todo?.date).toLocaleDateString("tr-TR")}</Text>
                 
                </View>
                <View style={styles.iconWrapper}>
                    <TouchableOpacity onPress={changeCompleted}>
                        <CustomIcon name={todo?.completed ? "checkmark-done-outline" : "checkmark-outline"} size={25} color={colors.iconColor} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setOpenModal(true)}>
                        <CustomIcon name={"create-outline"} size={25} color={colors.bgPrimary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteTodo}>
                        <CustomIcon name={"trash-outline"} size={25} color={colors.redColor} />
                    </TouchableOpacity>
                </View>
             
            </View>
            <TextEditModal 
            visible={openModal} 
            closeModal={()=>setOpenModal(false)} 
            willEditText={willEditText} 
            setWillEditText={setWillEditText}
             onConfirm={changeText}
             errMessage={errMessage}
             eror={eror}
             
             />
        </View>
    );
};

export default Todos

const styles = StyleSheet.create({
    todoWrapper: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: colors.bgPrimary,




    },
    todoContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    todoText: {
        color: colors.textPrimary,
        fontSize: 25,
        fontWeight: "bold",

    },
    date: {
        color: colors.textPrimary,
        marginTop: 10,
    },
    iconWrapper: {

        flexDirection: "row",
        gap: 10
    },
    completedTitle:{
        color:colors.gray,
        textDecorationLine:"line-through"
    }
})