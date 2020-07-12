import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DropMenuScreen from "../screens/DropMenuScreen";

const DropMenuStack = createStackNavigator({
    DropMenu: DropMenuScreen,
});

DropMenuStack.navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
        />
    ),
};

export default createMaterialTopTabNavigator( {
    DropMenuStack
});