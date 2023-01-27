import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddToDo from './components/AddToDo';
import Sandbox from './components/Sandbox';

export default function App() {

  const[todos,setTodos]=useState([
    {text:'buy chicken', key:1},
    {text:'create todo app', key:2},
    {text:'play on the playstation', key:3},
  ])

  const pressHandler = (key) =>{
    setTodos((prev)=>{
      return prev.filter(todo=>todo.key!=key)
    })
  }

  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
      return[
        {text:text, key:Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
          <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler} >{item.text}</TodoItem>
          )}
          />
        </View>


      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop:20,
    flex:1,
  }

});
