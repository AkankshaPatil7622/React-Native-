import React, { useState } from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { Image, View,StyleSheet,Text } from 'react-native'
import { Button } from 'react-native'
const ImgAndImgBackground = () => {
    const [doremon, setDoremon] = useState(false);
    const [nobita, setNobita] = useState (false);
   
    const handleDoremon = () =>
    {
        setDoremon(true);
        setNobita(false)
    }
    const handleNobita = () =>
    {
        setNobita(true);
        setDoremon(false);
    }
   
  return (
<ImageBackground
source={require('../assets/doracake.png')}
style={styles.imgBack}
>
    <View>
        <TouchableOpacity style={styles.btnN} onPress={handleNobita}>
            <Text >Nobita</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.btnD} onPress={handleDoremon}>
            <Text>Doremon</Text>
        </TouchableOpacity>
     {
        nobita && (<View style={styles.img}><Image source={require('../assets/nobita.png')}/></View>)
     }
     {
        doremon && (<View style={styles.img}><Image source={require('../assets/doremon.png')}/></View>)
     }
      
    </View>
    </ImageBackground>
      
   

  )
}

export default ImgAndImgBackground
const styles = StyleSheet.create({
    img : {
        margin : 100,
        height : 300,
        width : 300,
    },
    btn : {
        margin : 50,
        alignSelf : "center",
    },
    btnN : {
        margin : 50,
        height : 50,
        width : 200,
        backgroundColor : "yellow",
        borderRadius : 6,
        justifyContent : "center",
        alignItems : "center",
        alignSelf : "center",
    },
    btnD : {
        height : 50,
        width : 200,
        backgroundColor : "#87CEEB",
        borderRadius : 6,
        justifyContent : "center",
        alignItems : "center",
        alignSelf : "center"
    },

    txt : {
        fontSize : 30,
        color : "black",
        textAlign : "center",

    },
    img : {
       alignSelf : "center",
       marginTop : 100,
       
    },
    imgBack : {
        resizeMode : 'cover',
        height : '100%',
    }
})