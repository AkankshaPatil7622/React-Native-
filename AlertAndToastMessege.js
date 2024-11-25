import React, { useState } from 'react'
import {View,Text, StyleSheet, Alert, ToastAndroid} from "react-native";
import { Button } from 'react-native';

const AlertAndToastMessege = () => {
    const onPressMsgH = () => {
        Alert.alert("Messege","You clicked on hello",[{text : "ok"}])
    }
    const onPressMsgB = () =>
    {
        Alert.alert("Messege","You clicked on Bye",[{text : "ok",onPress : () =>console.warn("ok clicked")},{text : "clear"},{text : "do not show again"}])
      
    }
    const [pressed, setPressed] = useState(false);
    const changePress = () =>
    {
        setPressed(true);
        ToastAndroid.showWithGravity(
            "heyy akaksha and omkar",
            ToastAndroid.CENTER
        )
    }
  return (
   <View>
    <Text style={styles.titletxt}>testing alert and toast messeges</Text>

   <View style={styles.helloBtn}>
   <Button
   title='hello'
   onPress={onPressMsgH}></Button>
   </View>

   <View style={styles.byeBtn}>
    <Button
    title='bye'
    onPress={onPressMsgB}
    
    >
    </Button>
   </View>
   </View>
  )
}

export default AlertAndToastMessege
const styles = StyleSheet.create({
    titletxt : {
        marginTop : 100,
        margin : 60,
        fontSize : 30,
    },
    helloBtn : {
        marginTop : 100,
        margin : 4,
        width : 200,
        alignSelf : "center",
        
    },
    byeBtn : {
        width : 200,
        margin :5,
        alignSelf : "center"
    }
})