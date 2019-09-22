import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class SamediTroisieme extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '09:00', title: 'Panel #1', description: "TIC et Transmission des Relations intergénérationnelles\nSalle OIF"},
            {time: '10:00', title: 'PROGRAMME JEUNES (Chapitre 4)', description: "Première partie : Comment provoquer le changement autour de nous\nEspace Jeune Public"},
            {time: '10:20', title: 'PANEL #2', description: "Titre Panel #2\nSalle OIF"},
            {time: '11:40', title: 'CHAMPIS DES TIC', description: "Salle OIF"},
            {time: '11:30', title: 'Atelier participatif #1 en collaboration avec CFI', description: "– Dédiés aux Participants du CAMPUS AWF 2019\nThème : Jeunes & Nouvelles Technologies\nL’omniprésence des technologies : Défis, Opportunités & Perspectives pour la Jeunesse en Afrique\nSalle Orange"},
            {time: '13:00', title: 'Pause'},
            {time: '13:30', title: 'Cérémonie de cloture', description: "-Discours\n-Remises de prix\n-Cocktail\nSalle OIF"},
            {time: '16:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '17:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},

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
                    centerComponent={{ text: 'Samedi 23 Novembre', style: { color: '#fff', fontSize:18 } }}
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
