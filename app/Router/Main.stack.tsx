import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@router';
import { MainStackScreen } from '@router/Screens';

const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator initialRouteName={Routes.MainStack.ExampleScreen}>
        {MainStackScreen}
    </Stack.Navigator>
);

export default MainStack;
