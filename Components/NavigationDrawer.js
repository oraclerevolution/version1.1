import { createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'

import Ouverture from './Ouverture'
import AfricaWebFestivalPage from './AfricaWebFestivalPage'
import AfricaWeb2019 from './AfricaWeb2019'
import ActualitesPage from './ActualitesPage'
import Programme from './Programme'
import AwfTipsPage from './AwfTipsPage'
import AwfGame from './AwfGame'
import AwfTheqPage from './AwfTheqPage'
import Authentication from './Authentication'
//import ProfilPage from './ProfilPage'
import ActualiteDetail from './ActualiteDetail'
import TipsDetail from './TipsDetail'
import ThequeDetail from './ThequeDetail'
import ConnexionPage from './ConnexionPage'
import InscriptionPage from './InscriptionPage'
import Congratulations from './Congratulations'
import InteretPage from './Partials/InteretPage'

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
    'Le programme': {
        screen: Programme
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
    },

    }, {
    initialRouteName:'Accueil',
    headerMode: 'screen',
    contentOptions : {
        activeTintColor: '#6eccde'
    }
});

const myStackNavigation = createStackNavigator({
    "actualiteDetail": {
        screen: ActualiteDetail
    },
    'Accueil': {
        screen: Ouverture,
    },
    "tipsDetail": {
        screen: TipsDetail
    },
    "thequeDetail": {
        screen: ThequeDetail
    },
    "programme": {
        screen: Programme
    },
    "home": {
        screen: MyDrawerNavigator
    },
    "felicitation": {
        screen: Congratulations
    },
    "connexion": {
        screen: ConnexionPage
    },
    "inscription": {
        screen: InscriptionPage
    },
    "interet": {
        screen: InteretPage
    },
    "connex": {
        screen: Authentication
    }
},{
    initialRouteName: 'home',
    headerMode: 'none',
    
    }
);

const MyApp = createAppContainer(myStackNavigation);

export default MyApp
