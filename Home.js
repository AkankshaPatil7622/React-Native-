import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native'

const Home = () => {
    const [name, setName] = useState('');
    
    useEffect(()=>
    {
        getData();
    },[])
    const getData =async()=>
    {
try {
    AsyncStorage.getItem('username')
    .then(value => {
       if(value!=null){
        setName(value)
       }
    })

} catch (error) {
    console.error("error while saving data" + error)
}   
 }
  return (
   <View>
    <Text style={styles.txt}>
        hello { name}
       
    </Text>
 
   
   </View>
   
  )
}

export default Home
const styles = StyleSheet.create({
    main : {
        flex : 1,
    },
    txt : {
        marginTop : 50,
        textAlign : "center",
        fontSize : 60,
    },
    btn : {
        margin : 10,
        width : 200,
        alignSelf : "center",
    }
})