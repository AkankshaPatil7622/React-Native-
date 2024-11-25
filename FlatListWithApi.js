import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const FlatListWithApi = () => {
    const[data, setData]=useState([])
    useEffect(()=>{
        getAPIData();
    },[])
    const getAPIData= async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result =  await fetch(url);
    result = await result.json();  
    setData(result);   
    }
  return (
   <View>
    <Text style={{padding : 20, fontSize : 35,textAlign : "center"}}>FLat List using API</Text>
    {
        data.length > 0 ?
        <FlatList 
        data={data}
        renderItem={({item})=><View style={{borderBottomWidth : 1, borderBottomColor : "gray"}}>
                <Text style={{padding : 10, fontSize : 20,textAlign : "center",backgroundColor : "#ddd"}}>{item.id}</Text>
                <Text style={{padding : 10, fontSize : 20,textAlign : "center"}}>{item.title}</Text>
                <Text style={{padding : 10, fontSize : 20,textAlign : "center"}}>{item.body}</Text>



        </View> }
        /> : <Text>no data found</Text>
    }
   </View>
  )
}

export default FlatListWithApi
