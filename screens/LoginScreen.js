import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeModules, NativeEventEmitter } from 'react-native';
import SmartechReact from 'smartech-base-react-native';
import SmartechPushReact from 'smartech-push-react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();  // Access navigation object

  const { SmartechReact } = NativeModules;
  // const smartechEmitter = new NativeEventEmitter(SmartechReact);

  useEffect(() => {
    SmartechReact.addListener(SmartechReact.SmartechDeeplink, handleDeeplinkWithPayload);
    console.log("SmartechReact",SmartechReact);
    const handleDeeplinkWithPayload = (smartechData) => {
      console.log('Smartech Data :: ', smartechData);
      console.log('Smartech Deeplink :: ', smartechData.smtDeeplink);
      console.log('Smartech CustomPayload:: ', smartechData.smtCustomPayload);
    };

    // Cleanup listener on unmount
    return () => {
      SmartechReact.removeListener(SmartechReact.SmartechDeeplink, handleDeeplinkWithPayload);
    };
  }, []);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
    backgroundColor: '#f5f5f5',
  },
  // Define other styles if needed
});

export default LoginScreen;
