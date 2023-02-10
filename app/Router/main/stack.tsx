import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './keys';
import { MainStackScreen } from './screens';

const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator initialRouteName={Routes.ExampleScreen}>
        {MainStackScreen}
    </Stack.Navigator>
);

export default MainStack;
