import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SmartechBaseReact from "smartech-base-react-native"

const HomeScreen = ({navigation}) => {

  useEffect(()=>{
    const payloadata = {
      name: "Home_Screen",
      payload_id: "1",
      event_id:21
  };
  SmartechBaseReact.trackEvent("Home_Screen", payloadata);

  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen1</Text>
      <Text style={styles.text}>Welcome to the Home Screen2</Text>

      <Text style={styles.text}>Welcome to the Home Screen3</Text>

      <Text style={styles.text}>Welcome to the Home Screen4</Text>

      <Text style={styles.text}>Welcome to the Home Screen5</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap :30
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
