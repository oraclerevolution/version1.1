// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import {View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Mercredi from './Partials/Mercredi'
import JeudiPremier from './Partials/JeudiPremier'
import VendrediDeuxieme from './Partials/VendrediDeuxieme'
import SamediTroisieme from './Partials/SamediTroisieme'

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
    if (routeName === 'Jeudi 21') {
        iconName = `ios-calendar`;
    } else if (routeName === 'Vendredi 22') {
        iconName = `ios-calendar`;
    } else if (routeName === 'Samedi 23') {
        iconName = `ios-calendar`;
    } else if (routeName === 'Mercredi 20')

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
    createBottomTabNavigator(
        {
            'Mercredi 20': { screen: Mercredi },
            'Jeudi 21': { screen: JeudiPremier },
            'Vendredi 22': { screen: VendrediDeuxieme },
            'Samedi 23': { screen: SamediTroisieme },
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
            }),
            tabBarOptions: {
                activeTintColor: '#2ab1c8',
                inactiveTintColor: 'gray',
            },
        }
    )
);
