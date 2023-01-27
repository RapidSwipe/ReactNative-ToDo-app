import { StyleSheet, Text, TextInput, Button, View, Alert} from 'react-native';
import React, {useState} from 'react';


export default function AddToDo({submitHandler}){

    const[text,setText]=useState('')

    const changeHandler=(val)=>{
        setText(val);
    }


    return(
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={text.length>3?(()=>submitHandler(text)):()=>{Alert.alert("Oops","Task must be over 3 letters long",[
        {text:'Understood', onPress:()=>console.log("alert closed")}
    ])}} title='Add a task' color='coral'/>
        </View>
    )
}


const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#ddd'
    }
})