import React from 'react'
import {View,StyleSheet, Text,} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class JeudiPremier extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '08:30', title: 'Accueil & installation des invités', description:''},
            {time: '09:00', title: "Cérémonie d'ouverture", description:"Introduction de la 6è édition de AWF\nInspiration: «Envie de Changer le Monde ? Voici mes recettes ! »\nMot d'ouverture\nPanel #1 en collaboration avec SMART AFRICA\nThème: Accélerer la numérisation de l'Afrique: Enjeux et Perspectives\nSalle OIF"},
            {time: '11:00', title: 'Pause'},
            {time: '14:00', title: 'PROGRAMMES JEUNES (chapitre 1)', description: "Première partie: Comment être un citoyen aujourd’hui en faveur du développement\nEspace Jeune Public"},
            {time: '14:00', title: 'Panel #2', description: "Femmes entrepreneures &amp; numérique : ces actrices de l’innovation à prendre en compte !\nSalle OIF"},
            {time: '15:20', title: 'Panel #3', description: "Les Médias en Afrique : Les GAFAM dictent-ils les règles du jeu ?\nSalle OIF"},
            {time: '16:40', title: 'Atelier participatif #1 en collaboration avec CFI', description: "– Dédiés aux Participants du CAMPUS AWF 2019\nThème: Leadership\n Révèle le leader qui sommeille en toi !\nSalle Orange"},
            {time: '18:10',},
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
