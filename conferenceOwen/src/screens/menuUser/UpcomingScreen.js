import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Upcoming() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Conference Upcoming</Text>
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
