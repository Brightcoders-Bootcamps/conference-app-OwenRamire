import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Colors} from '../themes/Colors';

export default class NextEvents extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.nextEventsContainer}>
        <View style={styles.nextEventsCard}>
          <View style={styles.infoContainer}>
            <View style={{marginBottom: 10}}>
              <Text style={[styles.text, styles.dateText]}>{this.props.data.date}</Text>
            </View>
            <Text style={styles.text}>{this.props.data.nameEvent}</Text>
            <Text style={[styles.text, styles.speakerText]}>
              {this.props.data.speaker}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={[styles.text, styles.hourText]}>
              {this.props.data.hour}
            </Text>
          </View>
        </View>
        <View style={styles.thinLine}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  nextEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,
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
  thinLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.thinLine,
    marginTop: 10,
  },
});
