import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import firebaseService from "../../services/firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      await firebaseService.login(email, password);
      navigation.navigate("Main");
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
      <TouchableHighlight
        style={[styles.button, styles.loginButton]}
        onPress={onLogin}
      >
        <Text style={styles.textButtonLogin}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.signUpButton}
        onPress={() => navigation.navigate("SingUp")}
      >
        <Text style={styles.textButtonSingUp}>Create account</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
