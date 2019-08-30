import React from 'react'
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation'
import {SafeAreaView, ScrollView, View, Dimensions, Image} from 'react-native'
import Ouverture from './Ouverture'
import AfricaWeb2019 from './AfricaWeb2019'
import ActualitesPage from './ActualitesPage'
import Programme from './Programme'
import AwfTheqPage from './AwfTheqPage'
import Authentication from './Authentication'
import ActualiteDetail from './ActualiteDetail'
import ConnexionPage from './ConnexionPage'
import InscriptionPage from './InscriptionPage'
import Congratulations from './Congratulations'
import InteretPage from './Partials/InteretPage'
import TicketPage from './TicketPage'
import SpeakerDetail from './SpeakerDetail'

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:200, backgroundColor:'#0a2849', alignItems:'center', justifyContent:'center'}}>
            <Image
                source={require('../assets/logo_awf.png')}
                style={{height:120, width:120, borderRadius:70}}
            />
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

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
    },
    contentComponent: CustomDrawerComponent
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
