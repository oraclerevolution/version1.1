import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import Ouverture from './Ouverture'
import AfricaWebFestivalPage from './AfricaWebFestivalPage'
import AfricaWeb2019 from './AfricaWeb2019'
import ActualitesPage from './ActualitesPage'
import AwfTipsPage from './AwfTipsPage'
import AwfGame from './AwfGame'
import AwfTheqPage from './AwfTheqPage'
import Authentication from './Authentication'

const MyDrawerNavigator = createDrawerNavigator({
    'Accueil': {
        screen: Ouverture,
    },
    'Africa Web Festival': {
        screen: AfricaWebFestivalPage
    },
    'AWF 2019': {
        screen: AfricaWeb2019
    },
    'Les actualités': {
        screen: ActualitesPage
    },
    'AWF Tips': {
        screen: AwfTipsPage
    },
    'AWF Fun': {
        screen: AwfGame
    },
    'AWF Thèque': {
        screen: AwfTheqPage
    },
    'Authentification': {
        screen: Authentication
    }


    }, {
    initialRouteName:'Authentification'
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp