import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native";
const TextInputAndKeyBoard = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () =>
  {
    setSubmitted(!submitted);

  }
  return (
    <View>
      <Text style={styles.txt}>personal Info</Text>

      <Text style={styles.label}>Enter Name </Text>
      <TextInput style={styles.input}
       placeholder=" Name"
    />
      <Text style={styles.label}>Mobile</Text>
      <TextInput
        style={styles.input}
        placeholder=" Mobile"
        maxLength={10}
        keyboardType="numeric"
        
      />

      <TouchableOpacity style={styles.btn} 
      onPress={onPressHandler}
      activeOpacity={0.1}
      
      >
        <Text>{submitted ? "clear" : "Submit"}</Text>
      </TouchableOpacity>
    
    </View>
  );
};

export default TextInputAndKeyBoard;
const styles = StyleSheet.create({
  txt: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
    marginBottom: 100,
  },
  label: {
    marginTop: 30,
    marginLeft: 31,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 6,
    width: 300,
    marginLeft: 40,
  },
  btn: {
    height: 40,
    width: 100,
    borderColor: "black",
    backgroundColor: "orange",
    margin: 90,
    marginLeft: 150,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontWeight: 800,
  },
  regTxt: {
    textAlign: "center",
  },
});
