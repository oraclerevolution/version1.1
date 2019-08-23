// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import {View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ThematiquesPage from './Partials/ThematiquesPage'
import EvenementPage from './Partials/EvenementPage'
import InteretPage from './Partials/InteretPage'
import ProgrammePage from './Partials/ProgrammePage'
import Programme from './Programme'
import mapPage from './Partials/mapPage'

class IconWithBadge extends React.Component {
    render() {
        const { name, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
            </View>
        );
    }
}

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Thématiques') {
        iconName = `ios-clipboard`;

    } else if (routeName === 'Evènements') {
        iconName = `ios-color-filter`;
    } else if (routeName === 'Intérêt') {
        iconName = `ios-create`;
    } else if(routeName === 'Programme') {
        iconName = `ios-calendar`;
    } else if(routeName === 'Speakers') {
        iconName = `ios-man`;
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
    createBottomTabNavigator(
        {
            'Thématiques': { screen: ThematiquesPage },
            'Evènements': { screen: EvenementPage },
            'Programme': {screen: Programme},
            'Intérêt': { screen: InteretPage },
            'Speakers': {screen: mapPage},
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
            }),
            tabBarOptions: {
                activeTintColor: '#0a2849',
                inactiveTintColor: 'gray',
            },
        }
    )
);
