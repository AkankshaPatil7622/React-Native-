import React, { useState } from "react";
import { Alert, Image, TouchableOpacity } from "react-native";
import { View,Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({navigation})
{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const setData =async () =>
    {
        if(name.length==0)
        {
            Alert.alert("warning","plz write your data")
        }else{
            try
            {
                await AsyncStorage.setItem('username',name);
                await AsyncStorage.setItem('password',pass)
                console.warn("data saved successfully");
                navigation.replace('Home');
             
            }catch(error)
            {
                console.log(error);
            }
        }
    }

    const getData = async() =>
    {
       try {
        let savedName = await AsyncStorage.getItem('username')
        let savedPass = await AsyncStorage.getItem('password')
        if(savedName!==null && savedPass!==null)
        {
            console.log("username   :" + savedName);
            console.log("password   :" +savedPass);
           
        }
       } catch (error) {
        console.log("error while retriving data" + error);
       }
    }
    return(
       
        <View>

            <View>
                <Image source={require('../assets/akanksha.jpg') } resizeMode="cover" style={styles.img}></Image>
            </View>
            <View style={styles.logStyle}>
            <Text style={styles.label}>username </Text>
           <TextInput  
           placeholder="  enter username"
           style={styles.input}
           onChangeText={(value)=>setName(value)}>
           </TextInput>
           <Text style={styles.label}>Password</Text>
           <TextInput style={styles.input} 
           placeholder="  enter password"
           maxLength={8}
           secureTextEntry
           onChangeText={(value)=>setPass(value)}>
           </TextInput>

           <View style={styles.btn}>
            <Button title="submit"
            onPress={setData}></Button>
           </View>
           <View style={styles.btn}>
            <Button title="Retrieve Data" onPress={getData}></Button>
            </View>

        </View>
        </View>
        
    )
}
export default Login;
const styles = StyleSheet.create({
    logStyle : {
        marginTop : 50
    },
    label : {
        fontSize : 20,
        color : "black",
        textAlign : "center",
        marginTop : 30,

    },
    input : {
        borderWidth : 1,
        height : 50,
        width : 200,
        marginTop : 20,
        alignSelf : "center",
        borderRadius : 6,
        backgroundColor : "#ff99",
        padding :10
    }, btn : {
        marginTop : 40,
        width : 200,
        alignSelf : "center",
    },
    img : {
        height : 100,
        width : 200,
        marginTop : 100,
        alignSelf :  "center",
        borderRadius : 30
    }
})