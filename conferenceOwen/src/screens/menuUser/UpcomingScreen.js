import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {Colors} from '../../themes/Colors';
import TodayCard from '../../components/todayCard';
import NextEvents from '../../components/nextEventsCard';

export default function Upcoming() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TodayCard />
        {/* This view is for helping me with the background color and the responsive design   */}
        <View style={styles.auxContainer}> 
          <NextEvents />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  auxContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: Colors.white,
  },
  
});
