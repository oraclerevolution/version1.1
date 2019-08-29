import * as React from 'react';
import { Text, View, StyleSheet, Image,FlatList, Button, ScrollView, TouchableOpacity } from 'react-native';
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';

export default class AssetExample extends React.Component {

    constructor(){
        super()
        this.state = {
            clique: 0
        }
        this.goToTicketPage = this.goToTicketPage.bind(this)
    }
    goToTicketPage(){
        this.props.navigation.navigate('ticket')
    }

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
                    centerComponent={{ text: 'Africa Web APP', style: { color: '#fff', fontSize:18} }}
                />
                <ScrollView style={styles.container}>
                    <Text style={styles.paragraph}>Quoi d'neuf ?</Text>
                    <Image style={styles.logo} source={{uri: 'http://img.over-blog-kiwi.com/2/49/57/72/20181026/ob_f8f16f_africa-web-festival-1.jpg'}} />
                    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:10}}>
                        <Text style={{textAlign:'center',marginBottom:5}}>Africa Web festival vous rassemble pour trois (3) jours de folie dans le monde du numerique</Text>
                        <Button
                            title="prends ton ticket"
                            onPress={()=>{
                                let numberOne = parseInt(1)
                                this.setState({clique: this.state.clique + 1})
                                this.goToTicketPage()
                                console.log(`${this.state.clique} click`)
                            }}
                        />
                    </View>

                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:20,fontWeight:'bold'}}>Explorez</Text>
                    <View>
                        <TouchableOpacity style={styles.item}>
                            <Text style={{fontWeight: 'bold', fontSize:18}}><Icon name="ios-pulse" size={23} color="#0a2849"/> Reseautage</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={{fontWeight: 'bold', fontSize:18}}><Icon name="ios-grid" size={23} color="#0a2849"/> Programme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={{fontWeight: 'bold', fontSize:18}}><Icon name="ios-person" size={23} color="#0a2849"/> Intervenants</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item}>
                            <Text style={{fontWeight: 'bold', fontSize:18}}><Icon name="ios-bulb" size={23} color="#0a2849"/> Innovations</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:20,fontWeight:'bold'}}>Nos partenaires</Text>
                    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:10}}>
                        <Image
                            style={{height:200,width: 350}}
                            source={{uri: 'data:image/png;base64,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'}}
                        />
                    </View>
                    <Text style={{textAlign:'left', marginTop:25, marginBottom:5, fontSize:20,fontWeight:'bold'}}>Informations pratiques</Text>
                    <View style={{marginBottom:20}}>
                        <View style={styles.item2}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/jeudi.png')} />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 08h à 17h</Text>
                            </View>
                        </View >

                        <View  style={styles.item2}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/vendredi.png')}
                                />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 08h à 17h</Text>
                            </View>
                        </View >

                        <View  style={styles.item2}>
                            <View style={{flex:2}}>
                                <Image
                                    style={{height:80,width:90, borderRadius:5}}
                                    source={require('../assets/samedi.png')}
                                />
                            </View>
                            <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:19, fontWeight: 'bold'}}>De 08h à 17h</Text>
                            </View>
                        </View >
                    </View>

                </ScrollView>
                <View style={{backgroundColor:'#0a2849', height:80,}}>
                    <Text style={{textAlign:'center', color:'white',fontSize:13, padding:10}}>© AFRICA WEB APP - TOUS DROITS RESERVES</Text>
                    <Text style={{textAlign:'center', color:'white',fontSize:13}}>App powered by WeenovIT ®</Text>
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
        fontSize: 20,
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
    item: {
        padding: 10,
        borderWidth:1,
        borderColor:'#0a2849',
        height: 50,
        margin:5,
        borderRadius: 5,
        flex:1,
        justifyContent:'center'
    },
    logo: {
        height: 150,
        width: 320,
        margin:10,
        alignSelf:'center',
    }
});
