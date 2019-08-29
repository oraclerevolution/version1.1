import { createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'

import Ouverture from './Ouverture'
import AfricaWeb2019 from './AfricaWeb2019'
import ActualitesPage from './ActualitesPage'
import Programme from './Programme'
import AwfGame from './AwfGame'
import AwfTheqPage from './AwfTheqPage'
import Authentication from './Authentication'
import ActualiteDetail from './ActualiteDetail'
import ConnexionPage from './ConnexionPage'
import InscriptionPage from './InscriptionPage'
import Congratulations from './Congratulations'
import InteretPage from './Partials/InteretPage'
import TicketPage from './TicketPage'
import SpeakerDetail from './SpeakerDetail'

const MyDrawerNavigator = createDrawerNavigator({
    'Accueil': {
        screen: Ouverture,
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
    'AWF Fun': {
        screen: AwfGame
    },
    'Rétrospective': {
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
    "programme": {
        screen: Programme
    },
    "home": {
        screen: MyDrawerNavigator
    },
    "felicitation": {
        screen: Congratulations
    },
    "ticket": {
        screen: TicketPage
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
    },
    "detail-speaker":{
        screen: SpeakerDetail
    }
},{
    initialRouteName: 'home',
    headerMode: 'none',
    
    }
);

const MyApp = createAppContainer(myStackNavigation);

export default MyApp
