import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';

const App: FC = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
