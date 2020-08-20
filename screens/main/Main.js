import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import firebaseService from "../../services/firebase";

const Main = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await firebaseService.getUser();
        setUserName(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.appText}>AugustoAyala</Text>
      <Text>{`Hello!!!${userName}`}</Text>
    </View>
  );
};

export default Main;
