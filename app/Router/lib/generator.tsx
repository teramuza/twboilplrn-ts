import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import withNavigationParamsAsProps from '@router/lib/withNavigationParamsAsProps';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { StackAnimationTypes } from 'react-native-screens';
import { StyleProp } from 'react-native';
import { isBoolean } from '@utils/primitiveType.utils';
const Stack = createNativeStackNavigator();

interface SceneProps {
  key: string;
  title?: string;
  initial?: boolean;
  leftButtonType?: string;
  rightButtonType?: string;
  blackTitle?: boolean;
  hideNavBar?: boolean;
  direction?: string;
  animation?: StackAnimationTypes;
  gesturesEnabled?: boolean;
  navigationBarStyle?: StyleProp<{
    backgroundColor?: string;
  }>;
  backgroundColor?: string;
  titleColor?: string;
  titlePosition?: 'center' | 'left';
}

// eslint-disable-next-line no-unused-vars
interface IGenerateScreen<P, S> extends SceneProps {
  name?: string;
  component: React.ComponentType<any>;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
}

export const generateScreen = <P, S>(
    params: IGenerateScreen<P, S>,
): React.ReactElement<IGenerateScreen<P, S>> => {
    const withNavigationParams = withNavigationParamsAsProps(params.component);

    return (
        <Stack.Screen
            key={params.key}
            name={params.key}
            component={withNavigationParams}
            options={{
                contentStyle: {
                    backgroundColor: params.backgroundColor ?? 'white',
                },
                headerTitleAlign: params.titlePosition || 'left',
                ...params.options,
                ...(params.navigationBarStyle && {
                    headerStyle: params.navigationBarStyle,
                }),
                ...(isBoolean(params.gesturesEnabled) && {
                    gestureEnabled: params.gesturesEnabled,
                }),
                ...(params.hideNavBar && {
                    header: () => null,
                }),
                ...(params.animation && {
                    animation: params.animation,
                }),
            }}
        />
    );
};
