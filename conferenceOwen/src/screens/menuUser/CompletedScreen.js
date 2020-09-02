import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import {Colors} from '../../themes/Colors';

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
    backgroundColor: Colors.backgroundScreen,
  },
  title: {
    fontSize: 20,
    fontFamily: 'AlBayan',
  },
});
