import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../themes/Colors';
import {upcomingEvents} from '../../events/UpcomingEvents';

export default function Upcoming() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.topLeftCorner, Colors.bottomRightCorner]} style={styles.linearGradient}>
        <View style={styles.cardEvent}>
          <View style={styles.infoContainer}>
            <View style={{marginBottom: 15}}>
              <Text style={[styles.text, styles.todayText]}>Today</Text>
            </View>
            <Text style={styles.text}>{upcomingEvents[0].nameEvent}</Text>
            <Text style={styles.text}>{upcomingEvents[0].speaker}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={[styles.text, styles.hourText]}>{upcomingEvents[0].hour}</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 0.3,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  cardEvent: {
    flex: 1,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingLeft: 20,
  },
  dateContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 25,
    paddingRight: 10
  },
  text: {
    fontSize: 15,
    fontFamily: 'AlBayan',
    color: Colors.white,
    marginBottom: 5
  },
  todayText: {
    fontSize: 18,
  },
  hourText: {
    fontSize: 20,
  },
});
