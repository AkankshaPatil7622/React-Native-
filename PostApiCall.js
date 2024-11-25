import React from "react";
import { Button, Text, View } from "react-native";

const PostApiCall = () => {
  const getData = async () => {
    const data = {
      name: "yogita",
      age: 20,
      email: "yogi@gmail.com",
    };
    const url = "http://192.168.40.128:3000/users";
    let result = await fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <View>
      <Text style={{ padding: 30, textAlign: "center", fontSize: 30 }}>
        POST Api call
      </Text>
      <Button title="save data" onPress={getData}></Button>
    </View>
  );
};

export default PostApiCall;
