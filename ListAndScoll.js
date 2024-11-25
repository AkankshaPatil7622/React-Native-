import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, RefreshControl } from "react-native";

export default function ListAndScroll() {
  const user = [
    { name: "akanksha", id: 1 },
    { name: "vedika", id: 2 },
    { name: "sanika", id: 3 },
    { name: "ishwari", id: 4 },
    { name: "shlok", id: 5 },
    { name: "akanksha", id: 6 },
    { name: "vedika", id: 7 },
    { name: "sanika", id: 8 },
    { name: "akanksha", id: 9 },
    { name: "vedika", id: 23 },
    { name: "sanika", id: 34 },
    { name: "akanksha", id: 16 },
    { name: "vedika", id: 25 },
    { name: "sanika", id: 345 },
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or other refresh logic
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    
    <FlatList
      data={user}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text style={styles.main}>{item.name}</Text>}
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

    />

  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  main: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    backgroundColor: "orange",
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
});
