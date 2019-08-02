import { createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'
import Ouverture from './Ouverture'
import AfricaWebFestivalPage from './AfricaWebFestivalPage'
import AfricaWeb2019 from './AfricaWeb2019'
import ActualitesPage from './ActualitesPage'
import AwfTipsPage from './AwfTipsPage'
import AwfGame from './AwfGame'
import AwfTheqPage from './AwfTheqPage'
import Authentication from './Authentication'
import ProfilPage from './ProfilPage'
import ActualiteDetail from './ActualiteDetail'
import TipsDetail from './TipsDetail'
import ThequeDetail from './ThequeDetail'

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
    },
    'Profil':{
        screen: ProfilPage
    }



    }, {
    initialRouteName:'Accueil',
    headerMode: 'screen',
    contentOptions : {
        activeTintColor: '#6eccee'
    }
});

const myStackNavigation = createStackNavigator({
    actualiteDetail: {
        screen: ActualiteDetail
    },
    tipsDetail: {
        screen: TipsDetail
    },
    thequeDetail: {
        screen: ThequeDetail
    },
    home: {
        screen: MyDrawerNavigator
    }
},{
    initialRouteName: 'home',
    headerMode: 'none',
    
    }
);

const MyApp = createAppContainer(myStackNavigation);

export default MyApp
