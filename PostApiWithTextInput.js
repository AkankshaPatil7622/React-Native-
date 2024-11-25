import React, { useState } from 'react'
import {View,Text,StyleSheet, TextInput, Button} from 'react-native'
const PostApiWithTextInput = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const saveData = async() =>
    {
        const url = "http://192.168.40.128:3000/users";
        let result = await fetch(url,{
            method : "post",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({name,age,email})
        })
        result = await result.json();
        setName('');
        setAge('');
        setEmail('');
    }

  return (
   <View>
    <Text style={{padding : 40,textAlign :"center",fontSize :37}}>Post API call with Text Input</Text>

    <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} placeholder='Enter name'/>
    <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} placeholder='Enter age'/>
    <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter email'/>
    <Button  title='save data'
    onPress={saveData}/>
   </View>
  )
}

export default PostApiWithTextInput
const styles = StyleSheet.create({
    input : {
        margin : 10,
        borderWidth : 1,
        borderColor : "skyblue",
        padding : 6
    }
})