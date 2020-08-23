import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "../../styles";
import { TextInput } from "react-native-gesture-handler";
import firebaseService from "../../services/firebase";

const SingUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSingUp = async () => {
    try {
      await firebaseService.createAccount(name, email, password);
      navigation.navigate("Login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appText}>AugustoAyala</Text>
      </View>
      <View>
        <TextInput
          placeholder="Name"
          style={styles.inputText}
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.inputText}
          value={email}
          onChange={(e) => setEmail(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputText}
          value={password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />
      </View>
      <TouchableHighlight style={styles.button} onPress={onSingUp}>
        <Text style={styles.textButton}>Create</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttonNav}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textButtonNav}>SingIn</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SingUp;
