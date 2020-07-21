import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/menuUser/UpcomingScreen';
import Completed from '../screens/menuUser/CompletedScreen';
import AddConference from '../screens/menuUser/AddScreen';
import {Colors} from '../themes/Colors';

const Tab = createMaterialTopTabNavigator();

export default function Navegation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.activeTab,
        inactiveTintColor: Colors.inactiveTab,
        pressColor: Colors.pressColor,
        pressOpacity: Colors.pressColor,
        indicatorStyle: {
          backgroundColor: Colors.indicatorTab,
        },
      }}
      initialRouteName="Upcoming"
      tabBarPosition="top">
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Add" component={AddConference} />
    </Tab.Navigator>
  );
}
