import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";

export type Props = {
  itemData: {
    item: { text: string; id: string };
  };
  onDeleteHandler: (id: string) => void;
};

const GoalItem: React.FC<Props> = ({ itemData, onDeleteHandler }) => {
  return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#cccccc" }}
          onPress={onDeleteHandler.bind(this, itemData.item.id)}
          style={({ pressed }) => pressed && styles.pressItem}
        >
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
});
