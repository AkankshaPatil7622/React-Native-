import React, { useEffect } from 'react'
import { useState } from 'react'
import{Button,View,Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const DeleteUserWithDeleteApi = () => {
    const [data, setData] = useState('');

    useEffect(() =>{
        getData();
    },[])
    const getData = async() =>
    {
        const url = "http://192.168.40.128:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    const deleteUser = async(id,name) =>
    {
        const url = "http://192.168.40.128:3000/users";
        let result = await fetch(`${url}/${id}`,
            {
                method : "delete"
            }
        );
        result = await result.json()
        Alert.alert("User deleted",`${name}`);
        getData();
    }
  return (
    <ScrollView>
    <Text style={{padding : 20, fontSize : 35,textAlign : "center", backgroundColor : "#669bbc"}}>Delete User With Api Call</Text>
    {
        data.length?
        data.map((item) =>
            <View style={styles.card}>
        <Text style={styles.text}>Name  :{item.name}</Text>
        <Text style={styles.text}>Age      :{item.age}</Text>
        <Text style={styles.text}>Email   :{item.email}</Text>
        <TouchableOpacity style={styles.btn}
        onPress={()=>deleteUser(item.id,item.name)}>
            <Text style={styles.btnTxt}>delete</Text>
            
        </TouchableOpacity>
    </View>) : <Text>No data present</Text>
    }
   
   </ScrollView> 
  )
}

export default DeleteUserWithDeleteApi
const styles = StyleSheet.create({
    text : {
        fontSize : 20,

    },
    card : {
        padding: 10,
        backgroundColor: "#fdf0d5",
        marginVertical: 5,
        
    },
    btn : {
        backgroundColor : "#780000",
        height : 30,
        width : 100,
        borderRadius : 5,
        alignSelf : "flex-end",
        position : "absolute",
        top : '45%',
        right : 10
    },
    btnTxt : {
        color : "white",
        padding : 5,
        textAlign : "center"
    }
})