import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LifeCycleMethodsAsUseEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.warn(count)
    },[count])
    return (
        <View>
            <Text style={styles.txt}>count is {count} </Text>

            <Button title='update' onPress={()=>setCount(count+4)}></Button>
        </View>
    );
};

export default LifeCycleMethodsAsUseEffectHook;
const styles = StyleSheet.create(
    {
        txt : {
            fontSize : 20,
            padding : 100,
            textAlign : "center",
        }
    }
);
