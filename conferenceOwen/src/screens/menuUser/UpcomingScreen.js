import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {Colors} from '../../themes/Colors';
import TodayCard from '../../components/todayCard';
import NextEvents from '../../components/nextEventsCard';
import {upcomingEvents} from '../../events/UpcomingEvents';

export default function Upcoming() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TodayCard />
        <View style={styles.auxContainer}>
          <FlatList 
            data={upcomingEvents}
            renderItem={({item}) => <NextEvents data={item}/>}
          />
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
    marginVertical: 30,
    paddingBottom: 30,
    backgroundColor: Colors.white,
  },
  
});
