import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/menuUser/UpcomingScreen';
import Completed from '../screens/menuUser/CompletedScreen';
import AddConference from '../screens/menuUser/AddScreen';
import {Colors} from '../themes/Colors';
import Icons from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

export default function Navegation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true, //Propertie to show icons in the top tab bar
        activeTintColor: Colors.activeTab, //Color of the selected button
        inactiveTintColor: Colors.inactiveTab, // Color of the unselected button
        pressColor: Colors.pressColor,
        pressOpacity: Colors.pressColor,
        // Style object for the tab bar
        style: {
          height: 80,
        },
        //This is the style of the thin line
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
