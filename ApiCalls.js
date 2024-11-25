import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

//function for api calls
const ApiCalls = () => {
    const [data, setData] = useState(undefined);
    const getApiData = async() =>
    {
        // api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";        
    let result = await fetch(url);
    result = await result.json();
    setData(result)        
    }
    useEffect(()=>{
        getApiData();
    },[])
  return (
  <View>
    <Text style={{margin : 100, fontSize :35, textAlign :"center"}}>ApiCalls</Text>
    {
        data?<View>
            <Text  style={{fontSize : 20, textAlign : "center"}}>id :{data.id}</Text>
            <Text  style={{fontSize : 20, textAlign : "center"}}>title :{data.title}</Text>
            <Text  style={{fontSize : 20, textAlign : "center"}}>body :{data.body}</Text>
        </View> : null
    }
  </View>
  )
}

export default ApiCalls
