import React from 'react'
import {View, StyleSheet, ScrollView, Button, Text, TouchableOpacity} from 'react-native'
import { Header,Button as Btns } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReseauDetail extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Btns
                            type="clear"
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'RESEAUTAGES', style: { color: '#fff' } }}
                />
                <ScrollView style={styles.container}>
                    <View style={{margin:10, backgroundColor:'#66a7f0', padding:10, borderRadius:3, shadowColor: "#000",shadowOffset: {width: 0,height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>
                        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:17,}}>Salle B2B</Text>
                        <Text style={{textAlign:'justify'}}>
                            Cette espace interaction et rencontres d’affaires sera améliorée pour permettre des échanges plus efficients. En effet, une activité dénommée « le cercle » sera organisée. C’est un mini-tribune de visibilité pour les gens d’affaires où est présenté le but de leur présence ou leurs éventuels projets.
                            Il sera précédé d’une préinscription et sera payant pour les intervenants de « le cercle » qui auront trois (03) minutes chrono d’intervention. Au menu : une sorte de « pitch dans l’inconnu » des fondateurs et porteurs de projet pitch devant des dizaines des personnes dont des investisseurs, représentants d’entreprises, financiers, etc. sans réellement savoir qui y figurent.
                        </Text>
                    </View>
                    <View style={{margin:10, backgroundColor:'#66a7f0', padding:10, borderRadius:3, shadowColor: "#000",shadowOffset: {width: 0,height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>
                        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:17,}}>Les Jardins des Rencontres B2B</Text>
                        <Text style={{textAlign:'justify'}}>
                        En forme des petits espaces permettant des rencontres d’affaires en tête à tête. Une innovation de la 6ème édition de AWF pour offrir plus d’option aux gens d’affaires afin de multiplier des rencontres avec des potentiels partenaires. Les jardins des rencontres B2B offre un cadre plus convivial et propice à des interactions plus approfondies.
                        </Text>
                    </View>

                    <View style={{margin:10, backgroundColor:'#66a7f0', padding:10, borderRadius:3, shadowColor: "#000",shadowOffset: {width: 0,height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,}}>
                        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:17,}}>Café-Biz</Text>
                        <Text style={{textAlign:'justify'}}>
                        Un espace de dégustation de café et de cacao ivoirien autour des rencontres entre gens d’affaires dans un cadre plus relax. Néanmoins, la bienséance et le caractère B2B de l’espace doivent guider l’esprit des rencontres.
                        </Text>
                    </View>

                    <Btns buttonStyle={{alignSelf:'center', marginBottom:5}} title="Ouvrir le formulaire" onPress={()=>this.props.navigation.navigate('interet')}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})