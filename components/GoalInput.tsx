import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type Props = {
  addGoalHandler: (
    text: string,
    setEnteredGoalText: (text: string) => void
  ) => void;
  modalIsVisible: boolean;
  closeModalHandler: () => void;
};

const GoalInput: React.FC<Props> = ({
  addGoalHandler,
  modalIsVisible,
  closeModalHandler,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal animationType="slide" visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/adaptive-icon.png")}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={closeModalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() =>
                addGoalHandler(enteredGoalText, setEnteredGoalText)
              }
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
});
