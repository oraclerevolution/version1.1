import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class SamediTroisieme extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '09:30', title: 'CONFERENCE\n', description: "e-Famille\nInclusion numérique: adopter les bonnes pratiques pour éviter les fractures générationnelles\nSalle OIF"},
            {time: '10:30', title: 'CONFERENCES', description: "Famille, Bien-être & TIC\n1. Les médias sociaux et les jeunes : éthique, devoir et responsabilités\n2. Cybersécurité et Protection des données personnelles\n3. Améliorer l’accès des familles aux services de santé grâce aux TIC\nSalle OIF"},
            {time: '11:40', title: 'PANELS/CONFERENCES', description: "Smart City\nPartie 1 : Les services publics à l’ère de la transformation digitale\nPartie 2 : Smart City : Quelle contribution des Green Tech, Clean Tech et Fablabs ?\nPartie 3 : L’environnement et la bonne gestion de l’eau : un enjeu majeur de développement durable\nSalle OIF"},
            {time: '12:40', title: "Jeu Concours: CHAMPIS DES TIC (finales)", description: "En collaboration avec ANSUT\nSalle OIF"},
            {time: '12:40', title: '– CAMPUS AWF 2019', description: "Présentation des résultats des travaux menés lors de la soirée Tribune Libre !\nSalle Orange"},
            {time: '13:20', title: 'CEREMONIE DE CLOTURE', description:"- Discours\n- Remise de prix\n- Cocktail\n Salle OIF"},
            {time: '13:30', title: 'Cérémonie de cloture', description: "-Discours\n-Remises de prix\n-Cocktail\nSalle OIF"},
        ],
        this.data2=[
            {time: '11:40', title: 'PROGRAMME JEUNES (Chapitre 3)', description:"Espace Jeune Public (Extérieur)"},
            {time:"12:30"}
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
                    <Text style={{fontSize:12, marginBottom:12}}>Journée Famille en partenariat avec l’UVICOCI (Union des Villes et Communes de Côte d’Ivoire) ; le Ministère des Sports le Ministère de la Ville ; le Ministère de la Femme, de la Famille et de l’Enfant ; le Ministère de la Modernisation de l'Administration et de l'Innovation du Service Public.</Text>

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
