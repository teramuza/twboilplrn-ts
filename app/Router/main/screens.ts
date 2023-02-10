import { generateScreen } from '@router/lib/generator';
import WelcomePage from '@screens/Welcome.page';
import Routes from './keys';
import NavigatorStyle from '@themes/navigator.styles';

const { NavBarWhite } = NavigatorStyle;

export const MainStackScreen = [
    generateScreen({
        navigationBarStyle: NavBarWhite,
        key: Routes.ExampleScreen,
        component: WelcomePage,
        hideNavBar: true,
    }),
];
