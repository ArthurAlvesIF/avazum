import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  DeviceEventEmitter,
} from 'react-native';

const App = () =>{
  const [service, setService] = useState(false);
  useEffect(()=>{
    DeviceEventEmitter.addListener("Service", ()=>{
      console.log("running...");
      setService(true);
      setTimeout(()=>{
        setService(false);
      }, 1000);
    });
  });
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};



export default App;
