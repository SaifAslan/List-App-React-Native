import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

const Home = ({ navigation }) => {
  const [courseGoals, setCourseGoals] = useState<
    { id: string; text: string }[]
  >([]);

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  function addGoalHandler(
    text: string,
    setEnteredGoalText: (text: string) => void
  ): void {
    setCourseGoals((prev) => {
      return [...prev, { id: Math.random().toString(), text }];
    });
    setEnteredGoalText("");
    closeModalHandler();
  }

  const onDeleteHandler = (goalId: string) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== goalId);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          closeModalHandler={closeModalHandler}
          modalIsVisible={modalIsVisible}
          addGoalHandler={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteHandler={onDeleteHandler}
                  itemData={itemData}
                />
              );
            }}
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate("AnotherScreen");
          }}
          title="Go To Another Page"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
});

export default Home;
