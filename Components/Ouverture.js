import * as React from 'react';
import { Text, View, StyleSheet, Image,FlatList, Button, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import data from './Partials/listeMenuData'
import ListeMenuItem from './Partials/ListeMenuItem'
import SwipeableViews from 'react-swipeable-views-native';

export default class AssetExample extends React.Component {

    constructor(){
        super()
        this.goToTicketPage = this.goToTicketPage.bind(this)
        this.goToReseautagePage = this.goToReseautagePage.bind(this)
    }

    goToTicketPage(){
        this.props.navigation.navigate('ticket')
    }

    goToReseautagePage = (nomPage,idMenu)=>{
        console.log("Display article id " + idMenu)
        this.props.navigation.navigate(nomPage,{ idMenu: idMenu})
    };

    render() {
        return (
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
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'Africa Web Festival', style: { color: '#fff', fontSize:18} }}
                />
                <ScrollView style={styles.container}>
                    <Text style={styles.paragraph}>Quoi d'neuf ?</Text>
                    <Image style={styles.logo} source={require('../assets/vivez.jpg')} />
                    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:10}}>
                        <Text style={{textAlign:'center',marginBottom:5, fontWeight:'bold'}}>Africa Web festival vous rassemble les 21, 22 et 23 novembre 2019.</Text>
                        <Button
                            title="prends ton ticket"
                            onPress={()=>{
                                this.goToTicketPage()
                            }}
                        />
                    </View>

                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:21,fontWeight:'bold'}}>Découvrez</Text>
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item})=> <ListeMenuItem item={item} goToReseautage={this.goToReseautagePage} />}
                        />

                    </View>

                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:21,fontWeight:'bold'}}>Nos partenaires</Text>
                        <SwipeableViews style={styles.slideContainer}>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_uvci.jpg")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Université Virtuelle de côte d'ivoire</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_cipharm.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>CIPHARM</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_francophonie.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Organisation Internationale de la Francophonie</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_montreal.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Maison de l'Afrique à Montréal</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_orange.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Orange Côte d'Ivoire</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_palais.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Palais de la culture de Treichville</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/logo_rti.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Radio Télévision Ivoirienne</Text>
                            </View>
                            <View style={[styles.slide]}>
                                <Image
                                    source={require("../assets/ministere_economie.png")}
                                    style={{width:300, height:200, marginBottom:10}}
                                />
                                <Text style={styles.text}>Ministère de l'économie numérique et de la poste</Text>
                            </View>
                        </SwipeableViews>
                        <View style={{borderWidth:1, width:60, alignSelf:'center', borderColor:"#000"}}></View>

                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:20,fontWeight:'bold'}}>Programme d'activités</Text>
                    <View style={{marginBottom:20}}>
                        <TouchableOpacity  style={styles.item2} onPress={()=>this.props.navigation.navigate('mercredi')}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/mercredi.jpeg')}
                                />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>Du matin au soir</Text>
                            </View>
                        </TouchableOpacity >

                        <TouchableOpacity  style={styles.item2} onPress={()=>this.props.navigation.navigate('jeudi')}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/samedi.png')}
                                />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 08h à 18h</Text>
                            </View>
                        </TouchableOpacity >

                        <TouchableOpacity style={styles.item2} onPress={()=>this.props.navigation.navigate('vendredi')}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/vendredi.png')}
                                />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 09h à 18h</Text>
                            </View>
                        </TouchableOpacity >

                        <TouchableOpacity style={styles.item2} onPress={()=>this.props.navigation.navigate('samedi')}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/jeudi.png')} />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 09h à 17h</Text>
                            </View>
                        </TouchableOpacity >
                    </View>

                </ScrollView>
                <View style={{backgroundColor:'#0a2849', height:80,}}>
                    <Text style={{textAlign:'center', color:'white',fontSize:12, padding:10}}>© Africa Web Festival - TOUS DROITS RESERVES</Text>
                    <Text style={{textAlign:'center', color:'white',fontSize:12}}>App powered by WEENOVIT ®</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        backgroundColor:'#FAF8F8',

    },
    paragraph: {
        margin: 10,
        marginTop: 0,
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item2: {
        padding: 10,
        borderWidth:1,
        borderColor:'#0a2849',
        height: 100,
        margin:5,
        borderRadius: 5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    logo: {
        height: 150,
        width: 385,
        margin:10,
        alignSelf:'center',
    },
    slideContainer: {
        height: 250,
      },
      slide: {
        padding: 15,
        height: 250,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      text: {
        color: '#000',
        fontSize: 16,
        textAlign:'center',
        fontWeight:"bold"
      },
});
