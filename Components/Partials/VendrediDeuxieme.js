import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class VendrediDeuxieme extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '09:00', title: "PANEL: Numérisation de l'Afrique & Emploi des Jeunes", description: "en collaboration avec Smart Africa et Le ministère de la promotion de la jeunesse et de l'emploi des jeunes\nThème: Qu'apporte l'accélération de la numérisation à la formation et à l'emploi des jeunes ?\nSalle OIF"},
            {time: '10:00', title: 'PANEL: Femme, TIC & Entrepreneuriat', description: "Thème: Entrepreneuriat féminin: favoriser l'intégration des femmes dans le secteur des TIC\n*Mot du ministre de la Femme de la Famille er de l'Enfant ou son représentant\nSalle OIF"},
            {time: '11:00', title:'ATELIER PARTICIPATIF', description:"Thème: Emploi des jeunes par l'entrepreneuriat\nPartie 1: La force du réseautage: établir un réseau pour réussir en affaires\nPartie 2: Réussir en affaires: Comment tirer parti des possibilités offertes par les médias sociaux\nSalle Orange"},
            {time: '12:00', title: 'Jeu Concours: CHAMPIS DES TIC (demi-finales)', description: "En collaboration avec ANSUT\nSalle OIF"},
            {time: '13:00', title: 'Pause Déjeuner'},
            {time: '15:00', title: 'Panel #5', description: "Innovation\nSoutenir l'agro-entrepreneuriat chez les jeunes: Quel apport des TIC ?\n*Mot du ministre de la Promotion de la Riziculture ou son représentant\nSalle OIF"},
            {time: '16:00', title: "ATELIER PARTICIPATIF\n(Spéciale CAMPUS AWF)", description: "Thème: Encadrement & Mentorat des jeunes porteurs de projet\nPartie 1 : Storytellers, 5 minutes pour convaincre !\nPartie 2 : Maitrisez l’art de parler aux investisseurs grâce au Elevator pitch\nSalle Orange"},
            {time: '17:10', title: "Prestations artistiques"},
            {time: '18:30', title: "SOIREE TRIBUNE LIBRE\n(Spéciale CAMPUS AWF)", description: "– Ma contribution pour un monde meilleur !\nThème : Les jeunes ont un mot à dire et un droit de redéfinir le monde !\nGroupe 1 : Emploi et Jeunes\nGroupe 2 : Civisme\nGroupe 3 : Vivre Ensemble"},
            {time: '20:30',}
        ],
        this.data2=[
            {time:'14:00', title:"PROGRAMME JEUNES (Chapitre 2)", description:"Espace Jeune Public (Extérieur)"},
            {time:'17:00'}
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
                    centerComponent={{ text: 'Vendredi 22 Novembre', style: { color: '#fff', fontSize:18 } }}
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
