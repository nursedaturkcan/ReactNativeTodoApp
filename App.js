import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import Header from './src/components/Header'

import CustomInput from './src/components/CustomInput'
import { colors } from './src/utils/constant'
import Todos from './src/components/Todos'


const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false
    }
    setTodos([...todos, newTodo])
    setText("")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header title={"Todo App"} />
      <CustomInput value={text} onChangeText={(text) => setText(text)}
        onIconPress={addTodo} placeholder={"Type your todo..."} hasIcon={true} />

      <View style={styles.todosWrapper}>
        {

          todos.length === 0 ? (<Text style={styles.emptyText}>Henüz Kayıtlı bir Todo bulunmamaktadır</Text>)
            : (
              <ScrollView style={styles.scrollView}>
                {
                  todos?.map(todo => (<Todos key={todo?.id} todo={todo} todos={todos} setTodos={setTodos} />))
                }
              </ScrollView>

            )
        }
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,

  },
  emptyText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    color: colors.textPrimary
  },
  scrollView: {
    flexGrow: 1
  }
})
