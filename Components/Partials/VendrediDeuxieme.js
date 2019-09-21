import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class VendrediDeuxieme extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '09:00', title: 'Panel #1', description: "Entrepreneuriat numérique : Quels programmes de développement en Afrique ?\nSalle OIF"},
            {time: '10:00', title: 'PROGRAMMES JEUNES (chapitre 2)', description: "Première partie: Comment s’engager en faveur de Paix ?\nEspace Jeune Public"},
            {time: '10:30', title: 'Panel #2', description: "Smart City : Quelle contribution des Green Tech/Clean Tech ?\nSalle OIF"},
            {time: '11:00', title: 'Pause'},
            {time: '14:00', title: 'Panel #3', description: "Cybersécurité et Protection des données personnelles\nSalle OIF"},
            {time: '14:00', title: 'PROGRAMMES JEUNES (chapitre 3)', description: "Comment être un bon allié face aux injustices sociales\nEspace Jeune Public"},
            {time: '15:00', title: 'Panel #4', description: "Communication Digitale & Marketing Digital \nPremière partie: Le marketing digital pour le B2B\nDeuxieme partie: L'Art de l'écriture web\nSalle Orange"},
            {time: '16:40', title: 'Atelier participatif #2 en collaboration avec CFI', description: "– Dédiés aux Participants du CAMPUS AWF 2019\nThème: Thème : Internet, Réseaux Sociaux et Droits Humains\nLe Pouvoir des médias sociaux dans la promotion des droits de l’Homme\nSalle Orange"},
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
                    centerComponent={{ text: 'Vendredi 30 Novembre', style: { color: '#fff', fontSize:18 } }}
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
