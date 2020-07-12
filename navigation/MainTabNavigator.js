import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ElectScreen from '../screens/ElectScreen';
import ComplaintScreen from '../screens/ComplaintScreen';
import ContactsScreen from '../screens/ContactsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Accueil: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'
      }
    />
  ),
};

const ElectStack = createStackNavigator({
  Links: ElectScreen,
});

ElectStack.navigationOptions = {
  tabBarLabel: 'Elus',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
    />
  ),
};

const ComplaintStack = createStackNavigator({
  Doléance: ComplaintScreen,
});

ComplaintStack.navigationOptions = {
  tabBarLabel: 'Doléance',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'ios-add-circle-outline'}
      />
  ),
};

const ContactsStack = createStackNavigator({
  Contacter: ContactsScreen,
});

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacter',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
      />
  ),
};

const ProfileStack = createStackNavigator({
  Profil: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
      />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ElectStack,
  ComplaintStack,
  ContactsStack,
  ProfileStack,
});
