import React, { useState,useEffect } from 'react'
import { FlatList } from 'react-native';
import { Text, View } from 'react-native'

const TestingMyOwnAPi = () => {
    const[data, setData] =useState([]);

    useEffect(()=>
    {
        getData();
    },[]);

    const getData= async() =>
    {
        const url = "http://192.168.40.128:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
  return (
   <View>
    <Text style={{fontSize:30, textAlign :"center",padding : 30}}>fetching data of my own api</Text>

    {
        data.length > 0?
       
            <FlatList 
            data={data}
            renderItem={({item})=>
            <View style={{padding : 10,borderBottomWidth : 1,borderBottomColor : "gray"}}>
                <Text >id : {item.id}</Text>
                <Text >name  :{item.name}</Text>
                <Text >age     :{item.age}</Text>
                <Text >email  :{item.email}</Text>



            </View>}
            />  : <Text> data not found</Text>
    }
   </View>
  )
}

export default TestingMyOwnAPi
