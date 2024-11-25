import React from "react";
import { View, Text , StyleSheet} from "react-native";
import { SectionList } from "react-native";

const RSectionList = () => {
  const items = [
    {
      title: "title1",
      data: ["item1-1", "item1-2", "item1-3"],
    },
    {
      title: "title2",
      data: ["item2-1", "item2-2", "item2-3"],
    },
    {
      title: "title3",
      data: ["item3-1", "item3-2", "item3-3"],
    },
    {
      title: "title4",
      data: ["item4-1", "item4-2", "item4-3"],
    },
    {
      title: "title5",
      data: ["item5-1", "item5-2"],
    },
  ];
  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={items}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View>
          <Text style={styles.main}>{section.title}</Text>
        </View>
      )}
    ></SectionList>
  );
};

export default RSectionList;
const styles = StyleSheet.create({
  main : {
    backgroundColor : "orange",
  }
})