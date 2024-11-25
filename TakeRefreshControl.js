import { useState } from "react";
import { RefreshControl, ScrollView, View, Text, StyleSheet } from "react-native";

const TakeRefreshControl = () => {
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

  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={pullMe} />}
    >
      <View style={styles.container}>
        {user.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.main}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TakeRefreshControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  itemContainer: {
    backgroundColor: "orange",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    alignItems: "center", // Center align the Text
  },
  main: {
    fontSize: 20,
    color: "white",
  },
});
