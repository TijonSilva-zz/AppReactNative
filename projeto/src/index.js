import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"

export default function App() {
 return (
  <>
   <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
   <View style={styles.container}>
    <Text style={styles.title}> Hellow RactNative</Text>
   </View>
  </>
 );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#7159c1',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },

 title: {
  color: '#FFF',
  fontSize: 42,
  fontWeight: 'bold'
 }
})