import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes/Colors';
import {upcomingEvents} from '../events/UpcomingEvents';

export default function nextEvents() {
  return (
    <View style={styles.nextEventsContainer}>
      <View style={styles.nextEventsCard}>
        <View style={styles.infoContainer}>
          <View style={{marginBottom: 10}}>
            <Text style={[styles.text, styles.dateText]}>Tomorrow</Text>
          </View>
          <Text style={styles.text}>{upcomingEvents[1].nameEvent}</Text>
          <Text style={[styles.text, styles.speakerText]}>
            {upcomingEvents[1].speaker}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={[styles.text, styles.hourText]}>
            {upcomingEvents[1].hour}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nextEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  nextEventsCard: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 0.8,
  },
  dateContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'AlBayan',
  },
  dateText: {
    color: Colors.activeTab,
  },
  hourText: {
    fontSize: 18,
  },
  speakerText: {
    color: Colors.inactiveTab,
  },
});
