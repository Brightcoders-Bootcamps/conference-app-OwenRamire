import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Completed() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Conferences Completed</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'AlBayan',
  },
});
