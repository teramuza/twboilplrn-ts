/* eslint-disable no-unused-vars */
import { generateScreen } from '@router/lib/generator';
import WelcomePage from '@screens/Welcome.page';
import Routes from '@router/index';
import NavigatorStyle from '@themes/navigator.styles';

const { NavBarWhite, NavBarTransparent, NavBarGreenNoShadow } = NavigatorStyle;

const unusedVar = '';

export const MainStackScreen = [
    generateScreen({
        navigationBarStyle: NavBarWhite,
        key: Routes.MainStack.ExampleScreen,
        component: WelcomePage,
    }),
];
