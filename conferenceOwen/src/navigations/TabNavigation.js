import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../themes/Colors';
import Icons from 'react-native-vector-icons/AntDesign';
import Upcoming from '../screens/menuUser/UpcomingScreen';
import Completed from '../screens/menuUser/CompletedScreen';
import AddConference from '../screens/menuUser/AddScreen';

const Tab = createMaterialTopTabNavigator();

export default function Navegation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        activeTintColor: Colors.activeTab,
        inactiveTintColor: Colors.inactiveTab,
        pressColor: Colors.pressColor,
        pressOpacity: Colors.pressColor,
        style: {
          height: 80,
        },
        indicatorStyle: {
          backgroundColor: Colors.activeTab,
        },
        labelStyle: {
          fontFamily: 'AlBayan',
          marginVertical: 20,
        },
        iconStyle: {
          position: 'absolute',
          right: -10,
          top: 10,
        },
      }}
      initialRouteName="Upcoming"
      tabBarPosition="top">
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
        }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{
          tabBarLabel: 'Completed',
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddConference}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => {
            focused = 'plus';
            return <Icons name={focused} size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
