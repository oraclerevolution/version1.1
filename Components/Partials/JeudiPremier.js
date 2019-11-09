import React from 'react'
import {View,StyleSheet, Text,} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class JeudiPremier extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '08:30', title: 'Accueil & installation des invités', description:"Hall d'Accueil"},
            {time: '09:30', title: "CEREMONIE D'OUVERTURE", description:"Allocutions\nInspiration\nPrestation artistique\nPANEL D'OUVERTURE: Accélerer la numérisation de l'Afrique: Enjeux et Perspectives\nSalle OIF"},
            {time: '11:15', title: 'Ouverture du Festival par le Ministre', description:"Visite des Stands\nCocktail"},
            {time: '12:00', title: 'Pause Déjeuner'},
            {time: '14:00', title: 'PANEL E-Commerce', description: "La problèmatique du e-commerce en Afrique\nSalle OIF"},
            {time: '15:00', title: 'PANEL Médias', description: "Face aux GAFAM, Quelle place peuvent occupés les Médias\nSalle OIF"},
            {time: '16:00', title: "ATELIER PARTICIPATIF\n(Spéciale CAMPUS AWF)", description: "Pour la mise en place d'un monde meilleur: Révélez le leader en vous !\nSalle Orange"},
            {time: '16:50',},
        ],
        this.data2=[
            {time: '14:00', title: 'PROGRAMME JEUNES (Chapitre 1)', description:"Espace Jeune Public (Extérieur)"},
            {time:"17:00"}
        ]

    }
    render() {
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                            <Buttons
                                type="clear"
                                icon={
                                    <Icon
                                        name="ios-menu"
                                        size={25}
                                        color="white"
                                    />
                                }
                                onPress={()=> this.props.navigation.openDrawer()}
                            />
                    }
                    centerComponent={{ text: 'Jeudi 21 Novembre', style: { color: '#fff', fontSize:18 } }}
                />
                <View style={styles.container}>
                    <View style={{flex:3, marginBottom:15}}>
                        <Timeline
                            data={this.data}
                            circleSize={20}
                            circleColor='rgb(45,156,219)'
                            lineColor='#6eccde'
                            timeContainerStyle={{minWidth:52, marginTop: -5}}
                            timeStyle={{textAlign: 'center', backgroundColor:'#0a2849', color:'white', padding:5, borderRadius:13}}
                            descriptionStyle={{color:'gray'}}
                            options={{
                                style:{paddingTop:5,padding: 20}
                            }}
                        />
                    </View>
                    
                    
                    <View style={{flex:1}}>
                        <Text style={{fontSize:17, margin:9, fontWeight:'600'}}>PROGRAMME JEUNE PUBLIC</Text>
                        <Timeline
                            data={this.data2}
                            circleSize={20}
                            circleColor='rgb(45,156,219)'
                            lineColor='#6eccde'
                            timeContainerStyle={{minWidth:52, marginTop: -5}}
                            timeStyle={{textAlign: 'center', backgroundColor:'#0a2849', color:'white', padding:5, borderRadius:13}}
                            descriptionStyle={{color:'gray'}}
                            options={{
                                style:{paddingTop:5,padding: 20}
                            }}
                        />
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:15
    }
})
