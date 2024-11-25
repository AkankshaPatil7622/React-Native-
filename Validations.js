import { useState } from "react";
import React  from 'react'
import {View,Text,StyleSheet, TextInput, Button} from "react-native";
const Validations = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const saveData = async() =>
    {  
         if(!age){
        setAgeError(true)
    }
    else{
          setAgeError(false)  
    }
       if(!email) {
        setEmailError(true)
       }
       else{
        setEmailError(false)  
  }
        if(!name) {
            setNameError(true);
        }
        else{
            setNameError(false)
        }
        if(!name || age <= 0 || !email) {

            return false;
        }
        

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
        <Text style={{fontSize : 32, textAlign : "center", padding : 30}}>Form Validations</Text>

        <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} placeholder='Enter name'/>
            {
                nameError ? <Text style={styles.errorMsg}>Please Enter Valid Name</Text> : null
            }
    <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} placeholder='Enter age'/>
            {
                ageError ? <Text style={styles.errorMsg}>please Enter Valid Age</Text> :null
            }
    <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter email'/>
            {
                emailError ? <Text style={styles.errorMsg}>please Enter Valid Email</Text> :null

            }
    <Button  title='save data'
    onPress={saveData}/>

    </View>
  )
}

export default Validations
const styles = StyleSheet.create({
    input : {
        margin : 10,
        borderWidth : 1,
        borderColor : "skyblue",
        padding : 6
    },
    errorMsg : {
        color : "red",
        marginLeft : 15
    }
})