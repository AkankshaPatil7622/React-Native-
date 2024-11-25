import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ListWithAPi = () => {
    const [post, setPost] = useState([]);
    const getPostData = async() =>
    {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setPost(result);
    }
    useEffect(()=>
    {
        getPostData();
    },[])
  return (
    <ScrollView>
    <Text style={styles.text}>List with api call</Text>

    {
        post.length ? post.map((item)=>
            <View style={{padding : 10,borderBottomWidth : 1, borderBlockColor : "gray"}}>
                <Text style={{backgroundColor : "#ddd"}}>id :  {item.id}</Text>
                <Text style={{padding : 10}}>title :  {item.title}</Text>
                <Text style={{padding : 10}}>body :  {item.body}</Text>
               
            </View>
        ): <Text>no data present</Text>
    }
   </ScrollView>
  )
}

export default ListWithAPi
const styles = StyleSheet.create({
    main : {
        margin : 40,
      
    },
    text : {
        textAlign : "center",
        fontSize : 35,
        padding : 10,
    }
})